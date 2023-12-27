import Image from "next/image"
import { getProjects } from "../../sanity/sanity-utils"
import { Project } from "../../types/Project"
import Link from "next/link"
import CardProject from "@/components/CardProject"

export default async function Home() {
  const projects = await getProjects()

  return (
    <>
      <div className="flex flex-col items-center lg:flex-row justify-between h-[calc(100vh-20rem)]">
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
          <h1>Ahmad Naufal Ramadan</h1>
          <h3>
            Informatics Engineering student from Bandung Institute of Technology
          </h3>
          <p className="mb-8">Software Engineer and CTF Enthusiast</p>
          <div>
            <Link
              href="#bio"
              className="bg-primary px-12 py-3 rounded-md hover:bg-background hover:outline hover:outline-primary hover:outline-2 transition ease-in-out"
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
          <h3>About Me</h3>
          <p className="mb-4">
            Vivamus maximus metus id urna gravida tempor. Quisque odio nisi,
            pulvinar eget lacus eget, aliquam commodo justo. Nulla pulvinar
            nulla et nulla rutrum posuere. Duis dapibus accumsan massa, at
            tincidunt quam tempus in. Fusce ultricies porta porttitor. Nam
            luctus rhoncus erat, sit amet fringilla augue euismod quis.{" "}
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-between gap-8 min-w-full">
            <button className="bg-primary py-3 rounded-md sm:w-48 hover:bg-secondary hover:outline hover:outline-primary hover:outline-2 transition ease-in-out">
              Get My CV
            </button>
            <Link
              href="#projects"
              className="sm:w-48 py-3 rounded-md text-center outline outline-primary outline-2 hover:bg-primary transition ease-in-out"
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
        <h3 className="text-center mt-4">My Projects</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {projects &&
            projects.map((project: Project) => (
              <CardProject project={project} key={project._id} />
            ))}
        </div>
        <Link
          href=""
          className="self-center bg-primary px-12 py-3 rounded-md hover:bg-background hover:outline hover:outline-primary hover:outline-2 transition ease-in-out"
        >
          View More
        </Link>
      </div>
    </>
  )
}
