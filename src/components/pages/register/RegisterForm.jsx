import React from "react";
import { FcGoogle } from "react-icons/fc";
import { IoEyeSharp } from "react-icons/io5";

const RegisterForm = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-white rounded-[10px] p-7.5 space-y-7.5 lp:space-y-10">
      <div className="w-full space-y-2">
        <p className="text-[28px] font-semibold text-center leading-[35px] lg:text-[38px] lg:leading-[48px]">
          Sign Up
        </p>
        <p className="w-full text-center text-grey-30 leading-[17px] lg:text-[16px] lg:leading-5 dk:text-lg dk:leading-[27px]">
          Create an account to unlock exclusive features.
        </p>
      </div>

      <div className="w-full space-y-6">
        <form action="" className="space-y-5">
          <div className="space-y-2.5">
            <label
              htmlFor="fullName"
              className="block font-medium text-grey-15 lg:text-[16px] lg:leading-6 dk:text-lg dk:leading-[27px]"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className=" block w-full p-5 border border-white-95 rounded-lg h-[61px] lg:text-[16px] lg:leading-6 lg:placeholder:text-[16px] dk:text-lg dk:leading-[27px]"
              placeholder="Enter your Name"
              required
            />
          </div>

          <div className="space-y-2.5">
            <label
              htmlFor="email"
              className="block font-medium text-grey-15 lg:text-[16px] lg:leading-6 dk:text-lg dk:leading-[27px]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className=" block w-full p-5 border border-white-95 rounded-lg h-[61px] lg:text-[16px] lg:leading-6 lg:placeholder:text-[16px] dk:text-lg dk:leading-[27px]"
              placeholder="Enter your Email"
              required
            />
          </div>

          <div className="space-y-2.5">
            <label
              htmlFor="password"
              className="block font-medium text-grey-15 lg:text-[16px] lg:leading-6 dk:text-lg dk:leading-[27px]"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                id="password"
                name="password"
                className=" block w-full p-5 border border-white-95 rounded-lg h-[61px] lg:text-[16px] lg:leading-6 lg:placeholder:text-[16px] dk:text-lg dk:leading-[27px]"
                placeholder="Enter your Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <IoEyeSharp className="h-5 w-5 text-grey-30" />
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="h-6 w-6 border-white-97 rounded-sm"
              required
            />
            <label
              htmlFor="terms"
              className="block text-grey-40 lg:text-[16px] lg:leading-6 dk:text-lg dk:leading-[27px]"
            >
              I agree with <a href="#">Terms of Use</a> and{" "}
              <a href="#">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center rounded-lg font-medium text-white bg-primary-50 py-3.5 px-5  dk:text-lg dk:leading-[27px]"
          >
            Sign Up
          </button>
        </form>

        <div className=" flex items-center">
          <div className="flex-grow border-t-[1px] text-white-90"></div>
          <span className="mx-4 text-grey-60">OR</span>
          <div className="flex-grow border-t-[1px] text-white-90"></div>
        </div>

        <button
          type="button"
          className="w-full flex justify-center items-center border border-white-95 rounded-lg font-medium text-grey-15 space-x-3.5 py-3.5 px-5"
        >
          <FcGoogle className="w-6 h-6" />
          <p className=" dk:text-lg dk:leading-[27px]">Sign Up with Google</p>
        </button>

        <p className=" text-center text-gray-600 lg:text-[16px] lg:leading-6 dk:text-lg dk:leading-[27px]">
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
