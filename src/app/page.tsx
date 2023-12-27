import Image from "next/image"
import { getProjects } from "../../sanity/sanity-utils"
import { Project } from "../../types/Project"
import Link from "next/link"
import CardProject from "@/components/CardProject"
import { Metadata, Viewport } from "next"

export const metadata: Metadata = {
  title: "Sandwicheese",
  description:
    "Hi! I'm Naufal, a software engineer and CTF enthusiast. Committed to mastering both domains, I focus on developing secure software and conquering CTF challenges. Seeking to gain more experience and knowledge to make a positive impact in these fields. Ready to connect and collaborate with fellow enthusiasts.",
  generator: "Next.js",
  applicationName: "Sandwicheese",
  keywords: [
    "Ahmad Naufal Ramadan",
    "Sandwicheese",
    "Ahmad",
    "Naufal",
    "Ramadan",
    "Personal Website",
    "Teknik Informatika",
    "Institut Teknologi Bandung",
    "ITB",
  ],
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  openGraph: {
    title: "Sandwicheese",
    description:
      "I'm Naufal, a software engineer and CTF enthusiast. Committed to mastering both domains, I focus on developing secure software and conquering CTF challenges. Seeking to gain more experience and knowledge to make a positive impact in these fields. Ready to connect and collaborate with fellow enthusiasts.",
    url: "https://sandwicheese.vercel.app/",
    siteName: "Sandwicheese",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandwicheese",
    description:
      "I'm Naufal, a software engineer and CTF enthusiast. Committed to mastering both domains, I focus on developing secure software and conquering CTF challenges. Seeking to gain more experience and knowledge to make a positive impact in these fields. Ready to connect and collaborate with fellow enthusiasts.",
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#271971",
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <>
      <div className="flex flex-col items-center lg:flex-row justify-between h-[calc(100vh-17rem)]">
        <main className="max-w-xl flex flex-col gap-2 text-center lg:text-start">
          <h3>Hello World! Meet</h3>
          <div className="bg-primary w-[200px] h-[200px] flex justify-center rounded-full mx-auto my-8 lg:hidden">
            <Image
              className="self-end rounded-full"
              src="/Bacin.png"
              width={280}
              height={280}
              alt="Foto"
            />
          </div>
          <h1 className="font-semibold">Ahmad Naufal Ramadan</h1>
          <h3>
            Informatics Engineering student from Bandung Institute of Technology
          </h3>
          <p className="mb-8">Software Engineer and CTF Enthusiast</p>
          <div>
            <Link
              href="#bio"
              className="bg-primary font px-12 py-3 rounded-md hover:bg-background hover:outline hover:outline-primary hover:outline-2 transition-transform ease-in-out"
            >
              Get to Know Him!
            </Link>
          </div>
        </main>
        <aside>
          <div className="bg-primary hidden w-[240px] h-[240px] xl:w-[280px] xl:h-[280px] lg:flex justify-center rounded-full xl:mr-12">
            <Image
              className="self-end rounded-full"
              src="/Bacin.png"
              width={280}
              height={280}
              alt="Foto"
            />
          </div>
        </aside>
      </div>
      <div
        id="bio"
        className="flex flex-col-reverse items-center xl:flex-row-reverse justify-center gap-16 xl:gap-48 bg-secondary grid-full-width h-svh px-6"
      >
        <main className="flex flex-col gap-4 max-w-md items-center xl:my-auto">
          <h3 className="font-semibold">About Me</h3>
          <p className="mb-4 text-justify">
            I&apos;m Naufal, a software engineer and CTF enthusiast. Committed
            to mastering both domains, I focus on developing secure software and
            conquering CTF challenges. Seeking to gain more experience and
            knowledge to make a positive impact in these fields. Ready to
            connect and collaborate with fellow enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-between gap-8 min-w-full">
            <button className="bg-primary py-3 rounded-md sm:w-48 hover:bg-secondary hover:outline hover:outline-primary hover:outline-2 transition-transform ease-in-out">
              Get My CV
            </button>
            <Link
              href="#projects"
              className="sm:w-48 py-3 rounded-md text-center outline outline-primary outline-2 hover:bg-primary transition-transform ease-in-out"
            >
              See My Projects
            </Link>
          </div>
        </main>
        <aside className="xl:my-auto w-[240px] h-[240px] lg:w-[280px] lg:h-[280px]">
          <Image
            src="/Bacin2.jpg"
            width={280}
            height={280}
            alt="Foto"
            className="rounded-xl"
          />
        </aside>
      </div>
      <div id="projects" className="flex flex-col gap-8">
        <h3 className="text-center mt-4 font-semibold">My Projects</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {projects &&
            projects.map((project: Project) => (
              <CardProject project={project} key={project._id} />
            ))}
        </div>
        <Link
          href="/projects"
          className="self-center bg-primary px-12 py-3 rounded-md hover:bg-background hover:outline hover:outline-primary hover:outline-2 transition-transform ease-in-out"
        >
          View More
        </Link>
      </div>
    </>
  )
}
