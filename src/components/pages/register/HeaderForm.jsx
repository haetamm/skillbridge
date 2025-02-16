import React from "react";
import PropTypes from "prop-types";

const HeaderForm = ({ name, desc }) => {
  return (
    <>
      <div className="w-full space-y-2 dk:space-y-3">
        <p className="font-semibold text-center text-[28px] leading-[35px] lp:text-[38px] lp:leading-[48px] dk-text-[48px] dk:leading-[60px] ">
          {name}
        </p>
        <p className="w-full text-center text-grey-30 leading-[17px] lp:text-[16px] lp:leading-5 dk:text-lg dk:leading-[23px]">
          {desc}
        </p>
      </div>
    </>
  );
};

HeaderForm.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default HeaderForm;
