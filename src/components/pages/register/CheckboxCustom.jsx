import React from "react";
import PropTypes from "prop-types";

const CheckboxCustom = ({ children }) => {
  return (
    <>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          className="h-6 w-6 border-white-97 rounded-sm dk:h-7.5 dk:w-7.5"
          required
        />
        <label htmlFor="terms" className="block text-grey-40 text-body">
          {children}
        </label>
      </div>
    </>
  );
};

CheckboxCustom.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CheckboxCustom;
