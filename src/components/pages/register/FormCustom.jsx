import React from "react";
import InputCustom from "./InputCustom";
import CheckboxCustom from "./CheckboxCustom";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { urlPage } from "../../../utils/constans";

const FormCustom = ({ fields }) => {
  const { pathname } = useLocation();
  return (
    <form action="" className="space-y-5 dk:space-y-6">
      {fields.map(({ label, type, placeholder }, index) => (
        <InputCustom
          key={index}
          label={label}
          type={type}
          placeholder={placeholder}
        />
      ))}

      <CheckboxCustom>
        {pathname === urlPage.SIGNIN ? (
          <p>Remember Me</p>
        ) : (
          <>
            I agree with{" "}
            <Link to="#" className="underline">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link to="#" className="underline">
              Privacy Policy
            </Link>
          </>
        )}
      </CheckboxCustom>

      <button
        type="submit"
        className="w-full flex justify-center rounded-lg font-medium text-white bg-primary-50 py-3.5 px-5 dk:py-4.5 dk:rounded-[10px] dk:text-lg dk:leading-[27px]"
      >
        {pathname === urlPage.SIGNIN ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

FormCustom.propTypes = {
  fields: PropTypes.array.isRequired,
};

export default FormCustom;
