"use client";

type Props = {
  /** Mostra/nasconde lo spinner con una transizione di opacità. */
  active: boolean;
};

/**
 * Overlay di caricamento elegante: backdrop sfocato + anello bicolore
 * (teal/ember) racchiuso in una card bianca fluttuante. È puramente
 * presentazionale; la logica di attivazione vive in NavigationProvider.
 */
export default function LoadingSpinner({ active }: Props) {
  return (
    <div
      aria-hidden={!active}
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-300 ${
        active ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="absolute inset-0 bg-sand/50 backdrop-blur-sm" />

      <div
        role="status"
        aria-live="polite"
        className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-paper/90 shadow-card ring-1 ring-ink/[0.04]"
      >
        <span className="block h-9 w-9 animate-spin rounded-full border-[3px] border-teal/15 border-r-ember/70 border-t-teal" />
        <span className="sr-only">Loading…</span>
      </div>
    </div>
  );
}
