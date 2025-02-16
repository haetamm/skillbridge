import React from "react";

const Divider = () => {
  return (
    <>
      <div className=" flex items-center">
        <div className="flex-grow border-t-[1px] text-white-90"></div>
        <span className="mx-3 text-grey-60 dk:text-lg dk:leading-[27px]">
          OR
        </span>
        <div className="flex-grow border-t-[1px] text-white-90"></div>
      </div>
    </>
  );
};

export default Divider;
