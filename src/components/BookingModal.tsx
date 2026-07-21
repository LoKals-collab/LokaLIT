"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { track } from "@vercel/analytics";
import { useI18n } from "@/lib/i18n";

type State = "idle" | "loading" | "success" | "error";

export default function BookingModal({
  experienceName,
  buttonClassName,
  buttonLabel,
}: {
  experienceName: string;
  buttonClassName: string;
  buttonLabel?: string;
}) {
  const { t } = useI18n();
  const b = t.booking;

  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [motivation, setMotivation] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [motivationError, setMotivationError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [state, setState] = useState<State>("idle");
  const [showAbandonSurvey, setShowAbandonSurvey] = useState(false);
  const [abandonAnswered, setAbandonAnswered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, state]);

  function openModal() {
    setState("idle");
    setShowAbandonSurvey(false);
    setAbandonAnswered(false);
    setOpen(true);
    track("booking_modal_open", { experience: experienceName });
  }

  function closeModal() {
    const alreadyAskedThisSession =
      typeof window !== "undefined" && sessionStorage.getItem("lokalit_abandon_asked") === "1";
    if (state !== "success" && !alreadyAskedThisSession) {
      setShowAbandonSurvey(true);
      return;
    }
    setOpen(false);
  }

  function selectAbandonReason(reason: string | null) {
    if (typeof window !== "undefined") sessionStorage.setItem("lokalit_abandon_asked", "1");
    if (reason) {
      track("booking_abandon_reason", { reason, experience: experienceName });
      setAbandonAnswered(true);
      window.setTimeout(() => setOpen(false), 900);
    } else {
      setOpen(false);
    }
  }

  function toggleFaq(question: string, isOpen: boolean) {
    if (isOpen) track("faq_opened", { question });
  }

  function selectMotivation(value: string) {
    setMotivation(value);
    setMotivationError("");
    track("booking_motivation", { motivation: value, experience: experienceName });
  }

  function validate() {
    let ok = true;
    if (!motivation) {
      setMotivationError(b.errorMotivation);
      ok = false;
    } else {
      setMotivationError("");
    }
    if (!name.trim()) {
      setNameError(b.errorName);
      ok = false;
    } else {
      setNameError("");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError(b.errorEmail);
      ok = false;
    } else {
      setEmailError("");
    }
    return ok;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), experienceName, motivation }),
      });
      if (!res.ok) throw new Error();
      setState("success");
      track("booking_submitted", { experience: experienceName });
    } catch {
      setState("error");
    }
  }

  return (
    <>
      <button type="button" onClick={openModal} className={buttonClassName}>
        {buttonLabel ?? b.cardCta}
      </button>

      {mounted && open && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/60 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-md overflow-hidden rounded-4xl bg-white p-6 shadow-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="eyebrow">{b.badge}</span>
              <button
                type="button"
                onClick={closeModal}
                aria-label={b.close}
                className="text-stone-400 transition-colors hover:text-stone-700"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {showAbandonSurvey ? (
              <div className="py-4">
                {abandonAnswered ? (
                  <p className="py-6 text-center text-sm text-stone-600">{b.abandon.thanks}</p>
                ) : (
                  <>
                    <p className="mt-3 font-display text-xl font-semibold text-ink">
                      {b.abandon.title}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {b.abandon.options.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => selectAbandonReason(opt.value)}
                          className="rounded-full border border-stone-200 px-3.5 py-2 text-xs font-medium text-stone-600 transition-colors hover:border-brand/50"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    <button
                      type="button"
                      onClick={() => selectAbandonReason(null)}
                      className="mt-4 text-xs font-medium text-stone-400 underline-offset-2 hover:text-stone-600 hover:underline"
                    >
                      {b.abandon.skip}
                    </button>
                  </>
                )}
              </div>
            ) : state === "success" ? (
              <div className="py-6 text-center">
                <p className="font-display text-xl font-semibold text-brand">
                  {b.successTitle.replace("{name}", name.trim())}
                </p>
                <p className="mt-2 text-sm text-stone-600">{b.successBody}</p>
              </div>
            ) : (
              <>
                <h2 className="mt-3 font-display text-2xl font-semibold text-ink">
                  {b.title.replace("{name}", experienceName)}
                </h2>

                <div className="mt-5 divide-y divide-stone-100 rounded-2xl border border-stone-200">
                  <p className="px-4 pt-3 pb-1 text-xs font-semibold uppercase tracking-wide text-stone-500">
                    {b.faqHeading}
                  </p>
                  {b.faq.map((item) => (
                    <details
                      key={item.question}
                      className="group px-4 py-3"
                      onToggle={(e) => toggleFaq(item.question, e.currentTarget.open)}
                    >
                      <summary className="cursor-pointer list-none text-sm font-medium text-ink marker:content-none">
                        <span className="flex items-center justify-between gap-3">
                          {item.question}
                          <svg
                            className="h-4 w-4 shrink-0 text-stone-400 transition-transform group-open:rotate-45"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.answer}</p>
                    </details>
                  ))}
                </div>

                <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-3">
                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-stone-500">
                      {b.motivationLabel}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {b.motivationOptions.map((opt) => (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => selectMotivation(opt.value)}
                          aria-pressed={motivation === opt.value}
                          className={`rounded-full border px-3.5 py-2 text-xs font-medium transition-colors ${
                            motivation === opt.value
                              ? "border-brand bg-brand text-white"
                              : "border-stone-200 text-stone-600 hover:border-brand/50"
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                    {motivationError && <p className="mt-1 text-xs text-red-500">{motivationError}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={b.namePlaceholder}
                      className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:border-brand focus:outline-none"
                    />
                    {nameError && <p className="mt-1 text-xs text-red-500">{nameError}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={b.emailPlaceholder}
                      className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:border-brand focus:outline-none"
                    />
                    {emailError && <p className="mt-1 text-xs text-red-500">{emailError}</p>}
                  </div>
                  {state === "error" && (
                    <p className="text-xs text-red-500">{b.errorGeneric}</p>
                  )}
                  <button
                    type="submit"
                    disabled={state === "loading"}
                    className="w-full rounded-2xl bg-brand py-3 text-sm font-semibold text-white transition hover:bg-brand/90 disabled:opacity-60"
                  >
                    {state === "loading" ? "…" : b.submit}
                  </button>
                </form>
                <p className="mt-4 text-center text-xs text-stone-500">{b.disclaimer}</p>
              </>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
