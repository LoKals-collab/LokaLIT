import Image from "next/image";

type Props = {
  image: string;
  eyebrow?: string;
  headline: string;
  subheadline: string;
  alt: string;
};

export default function Hero({ image, eyebrow, headline, subheadline, alt }: Props) {
  return (
    <section className="relative flex min-h-[68vh] items-end overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night/85 via-night/35 to-night/20" />
      <div className="container-px relative w-full pb-16 pt-32">
        <div className="max-w-2xl animate-fadeUp text-white">
          {eyebrow && (
            <span className="eyebrow text-white before:bg-ember">{eyebrow}</span>
          )}
          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            {subheadline}
          </p>
        </div>
      </div>
    </section>
  );
}
