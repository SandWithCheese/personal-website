import { type Metadata } from "next";

export const openGraphTemplate: Metadata["openGraph"] = {
  description:
    "Hi! I'm Naufal, a software engineer and CTF enthusiast. Committed to mastering both domains, I focus on developing secure software and conquering CTF challenges. Seeking to gain more experience and knowledge to make a positive impact in these fields. Ready to connect and collaborate with fellow enthusiasts.",
  url: "https://sandwicheese.vercel.app/",
  siteName: "Sandwicheese",
  locale: "en-US",
  type: "website",
  images: {
    url: "https://sandwicheese.vercel.app/opengraph-image.png",
    width: 512,
    height: 512,
    alt: "Sandwicheese",
  },
};

export const twitterTemplate: Metadata["twitter"] = {
  card: "summary_large_image",
  description:
    "I'm Naufal, a software engineer and CTF enthusiast. Committed to mastering both domains, I focus on developing secure software and conquering CTF challenges. Seeking to gain more experience and knowledge to make a positive impact in these fields. Ready to connect and collaborate with fellow enthusiasts.",
  images: {
    url: "https://sandwicheese.vercel.app/twitter-image.png",
    alt: "Sandwicheese",
  },
};
