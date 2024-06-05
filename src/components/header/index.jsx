"use client";
import { ASSETS } from "@/assets";
import Image from "next/image";
import React from "react";

export const Header = () => {
  return (
    <div className="bg-black px-5 py-5">
      <div className="flex items-center justify-between">
        <div className="">
          <Image src={ASSETS.HEADER_LOGO} alt="header_logo" />
        </div>
        <div className="">
          <h3 className="text-lg font-semibold text-[#67A3D2]">
            Join the Cipherem community to start completing quests and claiming
            rewards.
          </h3>
        </div>
        <div className="gradient-border">
          <button className="gradient-button px-2 font-bold text-white">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};
