import { Archive } from "@/types/Archive";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

function Archives({ archive }: { archive: Archive }) {
  const date = new Date(archive._createdAt);
  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-[450px] w-full max-w-96 flex-col rounded-lg bg-secondary transition-transform ease-in-out hover:scale-105 sm:col-span-6 sm:w-full lg:col-span-6 xl:col-span-4">
      <Link
        href={`/archives/${archive.slug.current}`}
        className="flex flex-grow flex-col gap-4"
      >
        <div className="relative aspect-video w-full">
          <Image
            src={archive.thumbnail}
            alt={archive.thumbnailAlt}
            fill
            className="rounded-t-lg object-cover"
          />
        </div>
        <div className="flex flex-grow flex-col gap-4 p-4">
          <h3 className="text-2xl font-medium leading-none tracking-tight">
            {archive.name}
          </h3>
          <div className="text-justify">
            <PortableText value={archive.description} />
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <p className="font-semibold">{dateString}</p>
        </div>
      </Link>
    </div>
  );
}

export default Archives;
