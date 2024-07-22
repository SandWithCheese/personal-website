import { Archive } from "@/types/Archive";
import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[] | null> {
  const client = createClient({
    projectId: "s4v7i3a0",
    dataset: "production",
    apiVersion: "2023-12-24",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type == "project"]|order(publishedAt desc){
        _id,
        name,
        description,
        "image": image.asset->url,
        techstack,
        url,
        publishedAt,
    }`,
  );
}

export async function getArchives(): Promise<Archive[] | null> {
  const client = createClient({
    projectId: "s4v7i3a0",
    dataset: "production",
    apiVersion: "2023-12-24",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type == "archive"]|order(publishedAt desc){
        _id,
        _createdAt,
        name,
        slug,
        description,
        "thumbnail": image.asset->url,
        "thumbnailAlt": image.alt,
        content,
        publishedAt,
    }`,
  );
}

export async function getArchive(slug: string): Promise<Archive | null> {
  const client = createClient({
    projectId: "s4v7i3a0",
    dataset: "production",
    apiVersion: "2023-12-24",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type == "archive" && slug.current == '${slug}']{
      _id,
      _createdAt,
      name,
      slug,
      description,
      "thumbnail": image.asset->url,
      "thumbnailAlt": image.alt,
      content,
      "audio": audio.asset->url,
      "audioTitle": audio.title,
      "audioAuthor": audio.author,
      publishedAt,
    }[0]`,
  );
}
