import { LockKeyhole } from "lucide-react";

export const Banner = (props) => {
  return (
    <div
      className="relative flex h-48 w-full items-center overflow-hidden rounded-b-2xl bg-cover bg-right-top bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(#000,#000),url(${props?.background})`,
        backgroundBlendMode: props?.isLocked ? "color" : "lighten",
        // backgroundPosition: "0 -66px",
      }}
    >
      <div className="mix z-10 mx-auto flex w-[90%] flex-col gap-2">
        <h1 className="text-base font-semibold text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          {props?.heading}
        </h1>
        <div className="flex flex-col gap-1 xl:gap-2 2xl:gap-3">
          <h3 className="text-sm font-semibold text-white md:text-base lg:text-lg xl:text-xl">
            {props?.level}
          </h3>
          <div
            className={`relative h-[2px] w-full bg-[#ffffff47] before:absolute before:start-0 before:h-[3px] before:w-[200px] before:bg-white before:content-[''] xl:w-[800px]`}
          />
        </div>
        {props?.isLocked && (
          <div className="relative right-10 sm:absolute sm:bottom-2 sm:right-2 sm:z-30 2xl:bottom-5 2xl:right-10">
            <button className="mt-2 flex items-center justify-between gap-2 rounded-full bg-[#282828] px-5 py-2 text-sm font-semibold text-white md:text-base xl:text-lg 2xl:px-7 2xl:py-3">
              <LockKeyhole /> Locked Modules
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
