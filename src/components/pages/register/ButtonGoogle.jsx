import React from "react";
import { FcGoogle } from "react-icons/fc";

const ButtonGoogle = () => {
  return (
    <>
      <button
        type="button"
        className="w-full flex justify-center items-center border border-white-95 rounded-lg font-medium text-grey-15 space-x-3.5 py-3.5 px-5 dk:py-5 dk:px-6"
      >
        <FcGoogle className="w-6 h-6" />
        <p className=" dk:text-lg dk:leading-[27px]">Sign Up with Google</p>
      </button>
    </>
  );
};

export default ButtonGoogle;
