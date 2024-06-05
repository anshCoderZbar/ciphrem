import { ASSETS } from "@/assets";
import Image from "next/image";

export const AddStars = () => {
  return (
    <div className="flex justify-end">
      <div className="pb-8 pt-5">
        <div className="flex items-center justify-between">
          <div className="relative z-10">
            <Image src={ASSETS.STAR_ICON} className="w-12" alt="star" />
          </div>
          <span className="relative right-2 bg-[#002542] px-7 text-lg font-medium">
            250
          </span>
          <div className="relative right-4 z-10 cursor-pointer rounded-e-xl">
            <Image src={ASSETS.PLUS_BTN} className="w-8" alt="plus" />
          </div>
        </div>
      </div>
    </div>
  );
};
