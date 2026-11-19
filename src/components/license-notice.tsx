import { cn } from "@/lib/cn";
import { site } from "@/lib/shared";

export function LicenseNotice({ className }: { className?: string }) {
  return (
    <aside
      className={cn("text-sm text-fd-muted-foreground not-prose", className)}
    >
      <p>
        © {site.year}{" "}
        <a
          href={site.url}
          className="font-medium text-fd-foreground underline decoration-fd-border underline-offset-2 hover:decoration-fd-foreground"
        >
          {site.author}
        </a>
        . Content licensed under{" "}
        <a
          href={site.licenseUrl}
          rel="license noreferrer"
          target="_blank"
          className="font-medium text-fd-foreground underline decoration-fd-border underline-offset-2 hover:decoration-fd-foreground"
        >
          {site.license}
        </a>
        . Based on{" "}
        <a
          href="https://fumadocs.dev"
          rel="noreferrer"
          target="_blank"
          className="font-medium text-fd-foreground underline decoration-fd-border underline-offset-2 hover:decoration-fd-foreground"
        >
          Fumadocs
        </a>
        .
      </p>
    </aside>
  );
}
