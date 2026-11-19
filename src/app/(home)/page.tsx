import Link from "next/link";
import { LicenseNotice } from "@/components/license-notice";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col justify-center text-center flex-1">
        <h1 className="text-2xl font-bold mb-4">Hello World</h1>
        <p>
          You can open{" "}
          <Link href="/docs" className="font-medium underline">
            /docs
          </Link>{" "}
          and see the documentation.
        </p>
      </div>
      <LicenseNotice className="mx-auto max-w-md px-4 py-8 text-center" />
    </div>
  );
}
