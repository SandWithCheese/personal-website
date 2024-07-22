import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  name: string;
  description: PortableTextBlock[];
  image: string;
  url: string;
  techstack: string[];
  publishedAt: string;
};
