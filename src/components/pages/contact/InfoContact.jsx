import React from "react";
import { contact, socialMedia } from "../../../utils/links";

const InfoContact = () => {
  return (
    <>
      <div className="w-full space-y-5 p-7.5 xl:py-[50px] lp:p-[60px] dk:p-20 dk:space-y-12.5">
        {contact.map(({ icon, label }, index) => (
          <div
            key={index}
            className=" flex flex-col items-center justify-center rounded-md bg-white-95 p-7.5 space-y-3.5 dk:space-y-5 dk:rounded-lg"
          >
            <div className=" bg-white-97 items-center flex rounded-md w-11 h-11 p-3 dk:w-[52px] dk:h-[52px]">
              {icon}
            </div>
            <p className="text-grey-30 lg:text-[16px] lg:leading-6 dk:text-lg dk:leading-[27px]">
              {label}
            </p>
          </div>
        ))}
        <div className="flex flex-col items-center rounded-md bg-white-95 p-7.5 space-y-3.5 dk:space-y-5 dk:rounded-lg ">
          <div className="flex space-x-2 justify-center items-center">
            {socialMedia.map(({ icon }, index) => (
              <div
                key={index}
                className=" bg-white-97 items-center flex rounded-md w-11 h-11 p-3 dk:w-[52px] dk:h-[52px]"
              >
                {icon}
              </div>
            ))}
          </div>
          <p className="text-grey-30 lg:text-[16px] lg:leading-6 dk:text-lg dk:leading-[27px]">
            Social Profiles
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoContact;
