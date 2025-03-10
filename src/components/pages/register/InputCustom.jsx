import React, { useState } from "react";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { urlPage } from "../../../utils/constans";

const InputCustom = ({ label, type, placeholder }) => {
  const { pathname } = useLocation();
  // Use state to manage whether the password is visible or not
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Function to toggle visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="space-y-2.5 dk:space-y-3.5">
      <label
        htmlFor={placeholder}
        className="block font-medium text-grey-15 text-body"
      >
        {label}
      </label>
      <div className="relative">
        <input
          type={passwordVisible ? "text" : type}
          id={placeholder}
          className="block w-full p-5 border border-white-95 bg-white-99  focus:bg-white rounded-lg h-[61px] lp:text-[16px] lp:leading-6 lp:placeholder:text-[16px] dk:text-lg dk:leading-[27px]"
          placeholder={placeholder}
          required
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            {passwordVisible ? (
              <IoEyeOffSharp className="h-5 w-5 text-grey-30 lg:w-6 lg:h-6" />
            ) : (
              <IoEyeSharp className="h-5 w-5 text-grey-30 lg:w-6 lg:h-6" />
            )}
          </button>
        )}
      </div>
      {pathname === urlPage.SIGNIN && type === "password" && (
        <p className="text-grey-30 text-body text-end">Forgot Password?</p>
      )}
    </div>
  );
};

InputCustom.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputCustom;
