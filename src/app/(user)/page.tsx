import { openGraphTemplate, twitterTemplate } from "@/lib/metadata";
import { getProjects } from "@/sanity/sanity-utils";
import { Metadata } from "next";

import AboutMeSection from "./about-me-section";
import HeroSection from "./hero-section";
import ProjectSection from "./project-section";

export const metadata: Metadata = {
  title: "Sandwicheese",
  openGraph: {
    ...openGraphTemplate,
    title: "Sandwicheese",
  },
  twitter: {
    ...twitterTemplate,
    title: "Sandwicheese",
  },
};

export const revalidate = 60;

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <HeroSection />
      <AboutMeSection />
      {projects && <ProjectSection projects={projects} />}
    </>
  );
}
