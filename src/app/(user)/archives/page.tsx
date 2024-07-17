import Archives from "@/components/archives";
import { Skeleton } from "@/components/ui/skeleton";
import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { getArchives } from "@/sanity/sanity-utils";
import { Archive } from "@/types/Archive";
import { Metadata } from "next";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Archives | Sandwicheese",
  openGraph: {
    ...openGraphTemplate,
    title: "Archives | Sandwicheese",
  },
  twitter: {
    ...twitterTemplate,
    title: "Archives | Sandwicheese",
  },
};

async function page() {
  const archives = await getArchives();

  if (archives === null) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col gap-8 py-12">
      <h2 className="text-center font-medium sm:text-start">Archives</h2>
      <div className="flex flex-col items-center gap-8 sm:grid sm:grid-cols-12 sm:items-stretch">
        {archives &&
          archives.map((archive: Archive) => (
            <Archives key={archive._id} archive={archive} />
          ))}
      </div>
    </div>
  );
}

export default page;
