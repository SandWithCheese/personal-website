import { getArchives } from "@/sanity/sanity-utils";

export const revalidate = 60;

const URL = "https://sandwicheese.vercel.app";

export default async function sitemap() {
  const archives = await getArchives();

  if (archives === null) {
    return null;
  }

  const posts = archives.map((archive) => ({
    url: `${URL}/archives/${archive.slug.current}`,
    lastModified: archive._createdAt,
  }));

  const routes = ["", "/projects", "/archives"].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...posts];
}
