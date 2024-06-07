"use client";
import { ASSETS } from "@/assets";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";

export const Header = ({ sidebarActive, setSidebarActive }) => {
  return (
    <div className="relative bg-black px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="">
          <Image src={ASSETS.HEADER_LOGO} alt="header_logo" />
        </div>
        <div className="">
          <h3 className="mr-10 text-sm font-semibold text-[#67A3D2] lg:mr-0 xl:text-base 2xl:text-lg">
            Join the Cipherem community to start completing quests and claiming
            rewards.
          </h3>
        </div>
        <div className="gradient-border hidden h-12 w-52 lg:block">
          <button className="gradient-button px-2 text-sm font-bold text-white lg:text-base 2xl:text-lg">
            Connect Wallet
          </button>
        </div>
        <div
          onClick={() => setSidebarActive(!sidebarActive)}
          className="absolute right-0 cursor-pointer text-white lg:hidden"
        >
          <Menu />
        </div>
      </div>
    </div>
  );
};
