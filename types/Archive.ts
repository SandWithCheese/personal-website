import { PortableTextBlock } from "sanity"

export type Archive = {
  _id: string
  _createdAt: string
  name: string
  slug: {
    current: string
    _type: string
  }
  description: PortableTextBlock[]
  thumbnail: string
  content: PortableTextBlock[]
}
