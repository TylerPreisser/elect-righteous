interface MarkdownRendererProps {
  html: string;
  className?: string;
  /**
   * Set to true for narrow/constrained contexts (e.g., sidebars).
   * Defaults to false (full prose width).
   */
  compact?: boolean;
}

export default function MarkdownRenderer({
  html,
  className = "",
  compact = false,
}: MarkdownRendererProps) {
  return (
    <div
      className={[
        "prose prose-slate max-w-none",
        // Override prose defaults with our design tokens
        "prose-headings:font-heading prose-headings:text-navy",
        "prose-a:text-teal prose-a:no-underline hover:prose-a:underline",
        "prose-blockquote:border-l-teal prose-blockquote:not-italic prose-blockquote:font-serif",
        "prose-strong:text-navy",
        "prose-code:text-navy prose-code:bg-light prose-code:rounded prose-code:px-1",
        "prose-th:bg-navy prose-th:text-white prose-th:font-heading",
        "prose-tr:even:bg-light",
        "prose-li:marker:text-teal",
        compact ? "prose-sm" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      // biome-ignore lint/security/noDangerouslySetInnerHtml -- html is agent-generated, sanitized upstream
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
