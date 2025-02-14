import React from "react";
import PropTypes from "prop-types";

const InputForm = ({ label, type, placeholder }) => {
  return (
    <div className="space-y-3 dk:space-y-4">
      <label
        htmlFor={placeholder}
        className="block font-medium lg:text-[16px] lg:leading-6 dk:text-lg dk:leading-[27px]"
      >
        {label}
      </label>
      <input
        id={placeholder}
        type={type}
        placeholder={placeholder}
        className="w-full h-[60px] p-5 border-[1px] border-white-95 bg-white-99 focus:bg-white  rounded-md focus:ring-2 focus:ring-primary-50 placeholder:text-[14px] placeholder:leading-5 lg:placeholder:text-[16px] dk:py-6 dk:px-5 dk:placeholder:text-lg"
        required
      />
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputForm;
