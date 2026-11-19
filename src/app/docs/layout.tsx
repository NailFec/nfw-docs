import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { LicenseNotice } from "@/components/license-notice";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      tree={source.getPageTree()}
      {...baseOptions()}
      sidebar={{
        footer: <LicenseNotice className="px-3 py-2" />,
      }}
    >
      {children}
    </DocsLayout>
  );
}
