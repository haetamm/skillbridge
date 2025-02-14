import React from "react";

const TogglePrice = () => {
  return (
    <>
      <div className="flex justify-center mt-5 sm:mt-0 flex-shrink-0">
        <div className=" bg-white p-3 rounded-md ">
          <button className="cursor-pointer rounded-md py-3 px-6 text-white bg-primary-50">
            Monthly
          </button>
          <button className="cursor-pointer rounded-md py-3 px-6">
            Yearly
          </button>
        </div>
      </div>
    </>
  );
};

export default TogglePrice;
