import { createClient, groq } from "next-sanity"

export async function getProjects() {
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
