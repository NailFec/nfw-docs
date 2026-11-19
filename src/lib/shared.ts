import { createGetUrl } from "fumadocs-core/source";

export const appName = "NailFec Docs";
export const docsRoute = "/docs";
export const docsImageRoute = "/og/docs";

export const site = {
  author: "NailFec",
  year: 2026,
  url: "https://nailfec.com",
  email: "nailfec17@gmail.com",
  license: "CC BY-NC-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const gitConfig = {
  user: "NailFec",
  repo: "nfw-docs",
  branch: "main",
};

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, "image.png"];

  return { segments, url: getImageUrl(segments, page.locale) };
}
