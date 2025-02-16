import React from "react";
import InputForm from "./InputForm";

const FormContact = () => {
  return (
    <div className="w-full p-7.5 lg:border-r-[1px] xl:py-[50px] lp:p-[60px] dk:p-20 ">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-5 lp:space-y-7 dk:space-y-12.5"
      >
        <div className="space-y-5 lp:space-y-7 dk:space-y-12.5">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lp:gap-6 dk:gap-7.5">
            <InputForm
              label="First Name"
              placeholder="Enter First Name"
              type="text"
            />

            <InputForm
              label="Last Name"
              placeholder="Enter Last Name"
              type="text"
            />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 lp:gap-6 dk:gap-7.5">
            <InputForm
              label="Email"
              placeholder="Enter your Email"
              type="email"
            />

            <InputForm
              label="Phone"
              placeholder="Enter Phone Number"
              type="number"
            />
          </div>

          <InputForm
            label="Subject"
            placeholder="Enter your Subject"
            type="text"
          />
        </div>

        <div className="space-y-3 lp:space-y-4 ">
          <p className="font-medium text-body">Message</p>
          <textarea
            placeholder="Enter your Message here..."
            rows="4"
            className="w-full h-[138px] border-[1px] bg-white-99 focus:bg-white  border-white-95 rounded-md focus:ring-2 focus:ring-primary-50 gap-3 p-5 placeholder:text-[14px] placeholder:leading-5 lp:placeholder:text-[16px] dk:placeholder:text-lg dk:h-[170px]"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full hover:bg-primary-70 transition font-medium cursor-pointer bg-primary-50 text-white py-3.5 px-5 rounded-md lg:mt-7 lg:w-[174px] gap-2.5 xl:mt-0 dk:text-lg dk:leading-[27px] dk:rounded-[10px] dk:min-w-[220px]"
          >
            Send Your Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormContact;
