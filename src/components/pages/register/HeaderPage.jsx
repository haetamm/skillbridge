import React from "react";
import PropTypes from "prop-types";

const HeaderPage = ({ name, desc }) => {
  return (
    <>
      <div className="w-full space-y-2 dk:space-y-3">
        <p className="text-[28px] font-semibold text-center leading-[35px] lp:text-[38px] lp:leading-[48px] dk-text-[48px] dk:leading-[64px] ">
          {name}
        </p>
        <p className="w-full text-center text-grey-30 leading-[17px] lp:text-[16px] lg:leading-5 dk:text-lg dk:leading-[23px]">
          {desc}
        </p>
      </div>
    </>
  );
};

HeaderPage.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default HeaderPage;
