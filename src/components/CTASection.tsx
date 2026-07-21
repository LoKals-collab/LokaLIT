"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";

type State = "idle" | "loading" | "success" | "error";

export default function CTASection() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [state, setState] = useState<State>("idle");

  function validate() {
    let ok = true;
    if (!name.trim()) {
      setNameError(t.cta.errorName);
      ok = false;
    } else {
      setNameError("");
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError(t.cta.errorEmail);
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
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      if (!res.ok) throw new Error();
      setState("success");
    } catch {
      setState("error");
    }
  }

  return (
    <section id="join" className="relative overflow-hidden bg-brand py-24 text-white">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-ember/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-px relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow text-white before:bg-ember">{t.cta.eyebrow}</span>
          <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">
            {t.cta.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">
            {t.cta.body}
          </p>

          <div className="mx-auto mt-10 max-w-md overflow-hidden rounded-4xl bg-white p-6 shadow-card text-left">
            {state === "success" ? (
              <div className="py-4 text-center">
                <p className="font-display text-xl font-semibold text-brand">
                  {t.cta.successTitle.replace("{name}", name.trim())}
                </p>
                <p className="mt-2 text-sm text-stone-600">{t.cta.successBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-3">
                <div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t.cta.namePlaceholder}
                    className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:border-brand focus:outline-none"
                  />
                  {nameError && (
                    <p className="mt-1 text-xs text-red-500">{nameError}</p>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.cta.emailPlaceholder}
                    className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:border-brand focus:outline-none"
                  />
                  {emailError && (
                    <p className="mt-1 text-xs text-red-500">{emailError}</p>
                  )}
                </div>
                {state === "error" && (
                  <p className="text-xs text-red-500">
                    Qualcosa è andato storto, riprova.
                  </p>
                )}
                <button
                  type="submit"
                  disabled={state === "loading"}
                  className="w-full rounded-2xl bg-brand py-3 text-sm font-semibold text-white transition hover:bg-brand/90 disabled:opacity-60"
                >
                  {state === "loading" ? "…" : t.cta.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
