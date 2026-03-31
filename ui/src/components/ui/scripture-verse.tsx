interface ScriptureVerseProps {
  text: string;
  reference: string;
  className?: string;
}

export default function ScriptureVerse({
  text,
  reference,
  className = "",
}: ScriptureVerseProps) {
  return (
    <figure
      className={`text-center px-6 py-8 ${className}`}
      aria-label={`Scripture: ${reference}`}
    >
      <blockquote
        className="italic leading-relaxed text-navy mb-3"
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
        }}
      >
        &ldquo;{text}&rdquo;
      </blockquote>
      <figcaption
        className="font-heading font-semibold text-teal text-sm uppercase tracking-widest"
        aria-label={`Reference: ${reference}`}
      >
        &mdash; {reference}
      </figcaption>
    </figure>
  );
}
