"use client";

import { ASSETS } from "@/assets";
import { AddStars, Banner, XpCards } from "@/components";
import { CardData, LockedCardData } from "@/mock/Quest";

export default function Home() {
  return (
    <div className="bg-[#090909]">
      <div className="pt-3 sm:pt-4 md:pt-5">
        <AddStars />
      </div>
      <div className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8">
        <Banner
          background={ASSETS.HERO_IMG.src}
          heading="Level 1 - Join our Family"
          level="0/1"
          isLocked={false}
        />
      </div>
      <div className="container mx-auto px-5 py-10">
        <div className="grid grid-cols-6 gap-5">
          {CardData?.length >= 1 &&
            CardData?.map((elm) => <XpCards key={elm?.id} details={elm} />)}
        </div>
      </div>
      <div className="pt-3 sm:pt-4 md:pt-5 lg:pt-6 xl:pt-7 2xl:pt-8">
        <Banner
          background={ASSETS.HERO_2_IMG.src}
          heading="Level 2 - Daily Tasks"
          level="0/1"
          isLocked={true}
        />
      </div>
      <div className="container mx-auto px-5 pb-20 pt-10">
        <div className="grid grid-cols-6 gap-5">
          {LockedCardData?.length >= 1 &&
            LockedCardData?.map((elm) => (
              <XpCards key={elm?.id} details={elm} />
            ))}
        </div>
      </div>
    </div>
  );
}
