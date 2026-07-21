type Props = {
  name: string;
  from: string;
  quote: string;
};

export default function TestimonialCard({ name, from, quote }: Props) {
  return (
    <figure className="flex h-full flex-col rounded-4xl bg-paper p-7 shadow-soft">
      <svg
        className="h-8 w-8 text-ember/70"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M9.5 4C6.46 5.2 4 8.1 4 11.6 4 14.6 5.9 16.7 8.4 16.7c2.1 0 3.6-1.6 3.6-3.6 0-1.9-1.4-3.4-3.2-3.5.3-1.6 1.7-3 3.3-3.6L9.5 4Zm9 0C15.46 5.2 13 8.1 13 11.6c0 3 1.9 5.1 4.4 5.1 2.1 0 3.6-1.6 3.6-3.6 0-1.9-1.4-3.4-3.2-3.5.3-1.6 1.7-3 3.3-3.6L18.5 4Z" />
      </svg>
      <blockquote className="mt-4 flex-1 font-display text-lg italic leading-relaxed text-ink/85">
        “{quote}”
      </blockquote>
      <figcaption className="mt-6 border-t border-ink/8 pt-5">
        <p className="font-semibold text-ink">{name}</p>
        <p className="text-sm text-teal">{from}</p>
      </figcaption>
    </figure>
  );
}
