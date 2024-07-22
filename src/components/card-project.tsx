import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Project } from "@/types/Project";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

function CardProject({ project }: { project: Project }) {
  return (
    <Card className="flex min-h-[450px] w-full max-w-96 flex-col gap-4 rounded-lg border-none bg-secondary transition-transform ease-in-out hover:scale-105 sm:col-span-6 sm:w-full lg:col-span-6 xl:col-span-4">
      <CardContent className="flex flex-grow flex-col gap-8 p-0">
        <div className="relative aspect-video w-full">
          <Image
            src={project.image}
            fill
            alt="image"
            className="rounded-t-xl object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 px-6">
          <CardTitle className="font-medium">{project.name}</CardTitle>
          <CardDescription className="text-md line-clamp-5 text-justify text-foreground">
            <PortableText value={project.description} />
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div>
          <p className="font-semibold">Tech Stacks:</p>
          <p>{project.techstack.join(", ")}</p>
        </div>
        <Link
          href={project.url}
          target="_blank"
          className="self-start justify-self-end"
          aria-label={project.name}
        >
          <svg
            viewBox="0 0 128 128"
            className="h-10 w-10 fill-accent transition ease-in-out hover:fill-primary"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.275 51.747l-3.221 2.579c-.477-1.941-.046-3.636.455-5.277 1.034-3.391 2.858-6.386 4.936-9.232.753-1.032 1.29-2.053 1.267-3.443-.085-4.919.436-9.778 2.122-14.443.86-2.379 2.022-4.592 4.008-6.514.783 3.826 1.493 7.503 3.586 10.261 1.51-1.339 3.021-2.613 4.457-3.965 8.624-8.111 18.778-13.179 30.482-14.847 14.681-2.093 28.23 1.056 40.53 9.432 1.162.792 2.496 1.333 3.763 1.962 5.825 2.893 10.222 7.198 12.976 13.119.462.991.82 2.03 1.227 3.046l.366-.063-1.584-9.499c6.35 8.911 8.353 18.801 8.895 29.179 1.186-1.655 1.177-3.615 1.819-5.49.211 1.362.475 2.719.624 4.087.586 5.377-.457 10.593-1.447 15.845-2.339 12.405-7.712 23.385-15.81 32.926-9.22 10.864-20.737 18.118-35.143 19.84-20.904 2.498-38.465-4.219-52.648-19.764C12.129 94.031 7.628 85.353 5.613 75.47c-1.524-7.481-1.157-14.921 1.326-22.198l.389-1.116c.022-.065-.016-.15-.053-.409zm94.636-9.92l.396-.342 4.464 3.447c-.059-1.046-.014-2.147-.195-3.208-.795-4.628-3.6-7.983-7.086-10.862-4.369-3.608-9.383-6.09-14.579-8.244-.511-.212-1.012-.449-1.516-.674l.062-.522 7.325-.434c-2.706-4.465-7.356-5.711-12.068-6.993l.587-.311c-9.55-2.982-19.015-3.216-28.551-.776-8.871 2.27-22.19 10.357-24.248 14.72l.6-.146c3.348-.822 6.69-1.048 10.062-.07.367.106.979-.137 1.295-.421 3.159-2.829 6.672-5.044 10.742-6.297 1.282-.395 2.604-.658 3.908-.981-.108.441-.305.621-.521.77-4.22 2.9-7.064 6.714-7.857 11.877-.043.283 0 .708.181.879 1.869 1.758 3.724 3.537 5.693 5.176.681.566 1.641.946 2.524 1.086 1.706.271 3.449.322 5.178.444 1.063.075 1.751.826 1.37 1.687-.565 1.282-1.182 2.471-2.479 3.336-2.454 1.638-4.726 3.551-7.093 5.322-.591.443-.614.845-.307 1.499.567 1.208 1.109 2.447 1.473 3.727.46 1.618.616 3.291.196 5.002-1.337-.295-2.562-.586-3.794-.831-1.238-.246-2.486-.438-3.728-.667-1.552-.285-2.876.259-3.672 1.524-.923 1.468-.938 3.002.049 4.26 2.011 2.561 4.288 4.858 6.977 6.712 2.225 1.536 4.726 2.39 7.388 1.82 1.853-.396 3.668-1.189 5.354-2.081 5.112-2.701 10.879-1.79 14.416 2.414.633.751 1.012 1.603.475 2.485-.516.847-1.382 1.046-2.377.797-1.034-.259-1.99-.081-2.924.539-2.465 1.636-4.886 3.378-7.5 4.744-4.211 2.201-8.8 2.942-13.539 2.766-.488-.016-.976 0-1.635 0 .244.289.331.412.438.515 3.423 3.319 7.347 5.87 11.876 7.363 4.987 1.644 10.084 2.317 15.258.888 5.799-1.601 10.354-5.114 14.25-9.553 1.57-1.79 2.994-3.707 4.485-5.565l.373.081-1.316 8.981c7.149-8.746 7.377-18.745 6.371-29.287 2.057 2.291 2.681 4.977 3.86 7.669 2.408-8.36 1.217-16.32-.641-24.265z"
            ></path>
          </svg>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CardProject;
