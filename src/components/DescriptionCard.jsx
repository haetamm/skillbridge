import React from "react";
import PropTypes from "prop-types";

const DescriptionCard = ({ title, desc, classList }) => {
  return (
    <>
      <div
        className={`${classList} kontener mx-auto md:flex md:justify-between gap-4 pb-7.5 lp:gap-20 lp:pb-10 dk:gap-25  dk:pb-12.5`}
      >
        <div className="w-full font-semibold text-grey-15  text-[28px] leading-10.5 lp:text-[38px] lp:leading-[57px] dk:text-[48px] dk:leading-[72px]">
          {title}
        </div>
        <div className="w-full pt-[15px] text-body md:pt-0">{desc}</div>
      </div>
      <hr className="border[1px] border-white-90 mb-12.5 lp:mb-20 dk:mb-25" />
    </>
  );
};

DescriptionCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classList: PropTypes.string,
};
export default DescriptionCard;
