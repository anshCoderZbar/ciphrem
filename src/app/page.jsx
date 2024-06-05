"use client";

import { ASSETS } from "@/assets";
import { AddStars } from "@/components";

export default function Home() {
  return (
    <div className="bg-[#090909] text-white">
      <AddStars />
      <div
        className="flex h-48 w-full items-center overflow-hidden rounded-b-2xl bg-cover"
        style={{ backgroundImage: `url(${ASSETS.HERO_IMG.src})` }}
      >
        <div className="mx-auto flex w-4/5 flex-col gap-5">
          <h1 className="text-3xl font-semibold text-white">
            Level 1 - Join our Family
          </h1>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-white">0/1</h3>
            <div
              className={`relative h-[2px] w-[800px] bg-[#ffffff47] before:absolute before:start-0 before:h-[3px] before:w-[200px] before:bg-white before:content-['']`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
