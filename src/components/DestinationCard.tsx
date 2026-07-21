import Image, { type StaticImageData } from "next/image";

type Props = {
  name: string;
  description: string;
  image: string | StaticImageData;
  cta?: string;
};

export default function DestinationCard({ name, description, image, cta = "Learn more" }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-4xl shadow-card">
      <div className="relative h-80 w-full">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 380px"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/20 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <h3 className="font-display text-2xl font-semibold">{name}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">{description}</p>
        <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ember transition-colors duration-200 group-hover:text-white">
          {cta}
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </article>
  );
}
