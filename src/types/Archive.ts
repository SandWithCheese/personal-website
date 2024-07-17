import { PortableTextBlock } from "sanity";

export type Archive = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: {
    current: string;
    _type: string;
  };
  description: PortableTextBlock[];
  thumbnail: string;
  thumbnailAlt: string;
  content: PortableTextBlock[];
  audio: string | null;
  audioTitle: string | null;
  audioAuthor: string | null;
  publishedAt: string;
};

export type Description = {
  text: string;
  _key: string;
  _type: string;
  marks: string[];
};
