import { ASSETS } from "@/assets";
import { AddStars } from "@/components";
import { UserCircle } from "lucide-react";
import Image from "next/image";

export default function LeaderBoard() {
  return (
    <div className="bg-[#090909]">
      <div className="pt-3 sm:pt-4 md:pt-5">
        <AddStars />
      </div>
      <div className="mx-auto my-10 w-full max-w-[1000px] rounded-2xl bg-[#0F0F13] p-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-white">Leaderboard</h1>
          <div className="gradient-border h-12 min-w-min !rounded-md">
            <button className="gradient-button flex items-center justify-between gap-3 !rounded-md px-5 text-sm font-bold text-white lg:text-base 2xl:text-lg">
              <UserCircle /> 52,392 Participants
            </button>
          </div>
        </div>
        <div className="pt-8">
          {new Array(15).fill(true)?.map((_, i) => {
            return (
              <div className="flex items-center justify-between border-b-[1px] border-[#1E1E24] py-5">
                <div className="flex items-center justify-between gap-x-10">
                  <p className="text-base text-[#8A8A98]">
                    {`${i + 1 < 10 ? "0" : ""}${i + 1}`}.
                  </p>
                  <div className="overflow-hidden">
                    <Image
                      src={ASSETS.USER}
                      alt="user"
                      className="h-auto w-12 rounded-md"
                    />
                  </div>
                  <p className="text-lg font-medium text-white">Presh5656</p>
                </div>
                <p className="text-lg font-medium text-white">84180 XP</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
