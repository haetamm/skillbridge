import React from "react";
import { logo } from "../../../utils/helper";
import "../../../styles/sponsor.css";

const Sponsor = () => {
  return (
    <>
      <div className="w-full my-7.5 md:my-15 lg:my-10 xl:my-14 2xl:my-20">
        <div className="bg-white-95 kontener mx-auto overflow-hidden h-21 p-2.5 rounded-lg flex justify-center items-center border-[1px]  xl:h-[90px] lp:min-h-[116px] lp:p-6  dk:min-h-[154px] dk:p-7.5">
          {logo.map((img, index) => (
            <div
              key={index}
              className={`${
                index !== logo.length - 1 ? "border-r-[1px]" : ""
              } py-5 px-7.5 flex items-center min-w-[112px] justify-center animate-marquee lp:min-w-[175px] dk:p-7.5`}
            >
              <img
                src={`/img/${img}.png`}
                alt={img}
                className="w-[47px] h-5.5 xl:min-w-[64px] xl:h-7 lp:w-[64px] lp:h-7 dk:w-25 dk:h-8.5"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsor;
