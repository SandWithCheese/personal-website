"use client";

import { Button } from "@/components/ui/button";
import scrollToSection from "@/lib/scroll";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AboutMeSection() {
  return (
    <section
      id="bio"
      className="grid-full-width flex min-h-screen flex-col-reverse items-center justify-center gap-16 overflow-visible bg-secondary px-6 py-24 xl:flex-row-reverse xl:gap-48"
    >
      <div className="flex max-w-md flex-col items-center gap-4 xl:my-auto">
        <h3 className="font-semibold">About Me</h3>
        <p className="mb-4 text-justify">
          I&apos;m Naufal, a software engineer and CTF enthusiast. Committed to
          mastering both domains, I focus on developing secure software and
          conquering CTF challenges. Seeking to gain more experience and
          knowledge to make a positive impact in these fields. Ready to connect
          and collaborate with fellow enthusiasts.
        </p>
        <div className="flex min-w-full flex-col gap-8 sm:flex-row sm:justify-center lg:justify-between">
          <Button className="rounded-md bg-primary py-6 text-base text-center font-normal transition-transform ease-in-out hover:bg-secondary hover:outline hover:outline-2 hover:outline-primary sm:w-48">
            <Link
              href="https://drive.google.com/drive/folders/1v-6Hu1JvhI1a9L7WJb48h2wvDhfVxj0s?usp=sharing"
              target="_blank"
            >
              Get My CV
            </Link>
          </Button>
          <Button
            onClick={() => scrollToSection("projects", 0)}
            className="rounded-md bg-secondary/0 py-6 text-base text-center font-normal outline outline-2 outline-primary transition-transform ease-in-out hover:bg-primary sm:w-48"
          >
            See My Projects
          </Button>
        </div>
      </div>
      <div className="h-[240px] w-[240px] lg:h-[280px] lg:w-[280px] xl:my-auto">
        <Image
          src="/Bacin2.jpg"
          width={280}
          height={280}
          alt="Foto"
          className="rounded-xl"
        />
      </div>
    </section>
  );
}

export default AboutMeSection;
