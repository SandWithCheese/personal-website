import { createClient, groq } from "next-sanity"
import { Archive } from "../types/Archive"
import { Project } from "../types/Project"

export async function getProjects(): Promise<Project[] | null> {
  const client = createClient({
    projectId: "s4v7i3a0",
    dataset: "production",
    apiVersion: "2023-12-24",
    useCdn: true,
  })

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        name,
        description,
        "image": image.asset->url,
        techstack,
        url,
    }`
  )
}

export async function getArchives(): Promise<Archive[] | null> {
  const client = createClient({
    projectId: "s4v7i3a0",
    dataset: "production",
    apiVersion: "2023-12-24",
    useCdn: true,
  })

  return client.fetch(
    groq`*[_type == "archive"]{
        _id,
        _createdAt,
        name,
        slug,
        description,
        "thumbnail": image.asset->url,
        content,
    }`
  )
}

export async function getArchive(slug: string): Promise<Archive | null> {
  const client = createClient({
    projectId: "s4v7i3a0",
    dataset: "production",
    apiVersion: "2023-12-24",
    useCdn: true,
  })

  return client.fetch(
    groq`*[_type == "archive" && slug.current == '${slug}']{
      _id,
      _createdAt,
      name,
      slug,
      description,
      "thumbnail": image.asset->url,
      content,
    }[0]`
  )
}
