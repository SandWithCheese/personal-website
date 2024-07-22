"use client";

import { Button } from "@/components/ui/button";
import scrollToSection from "@/lib/scroll";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <section className="flex min-h-[calc(100vh-100px)] flex-col items-center justify-between overflow-visible py-12 lg:flex-row lg:pb-24">
      <div className="flex max-w-xl flex-col gap-2 text-center lg:text-start">
        <h3>Hello World! Meet</h3>
        <div className="mx-auto my-8 flex h-[200px] w-[200px] justify-center rounded-full bg-primary lg:hidden">
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
          <Button
            onClick={() => scrollToSection("bio", 0)}
            className="rounded-md bg-primary px-12 py-[22px] text-base font-normal transition-transform ease-in-out hover:bg-background hover:outline hover:outline-2 hover:outline-primary"
          >
            Get to Know Him!
          </Button>
        </div>
      </div>
      <div>
        <div className="hidden h-[240px] w-[240px] justify-center rounded-full bg-primary lg:flex xl:mr-12 xl:h-[280px] xl:w-[280px]">
          <Image
            className="self-end rounded-full"
            src="/Bacin.png"
            width={280}
            height={280}
            alt="Foto"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
