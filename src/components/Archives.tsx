import Link from "next/link";
import { Archive } from "@/types/Archive";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

function Archives(props: { archive: Archive }) {
  const date = new Date(props.archive._createdAt);
  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex min-h-[450px] max-w-96 flex-col rounded-lg bg-secondary transition-transform ease-in-out hover:scale-105 sm:col-span-6 sm:w-full lg:col-span-6 xl:col-span-4">
      <Link
        href={`/archives/${props.archive.slug.current}`}
        className="flex flex-grow flex-col gap-4"
      >
        <div className="relative aspect-video w-full">
          <Image
            src={props.archive.thumbnail}
            alt="thumbnail"
            fill
            className="rounded-t-lg object-cover"
          />
        </div>
        <div className="flex flex-grow flex-col gap-4 p-4">
          <h3 className="text-2xl font-medium leading-none tracking-tight">
            {props.archive.name}
          </h3>
          <div className="text-justify">
            <PortableText value={props.archive.description} />
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
