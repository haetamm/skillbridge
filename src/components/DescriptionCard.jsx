import React from "react";
import PropTypes from "prop-types";

const DescriptionCard = ({ title, desc, classList }) => {
  return (
    <>
      <div
        className={`${classList} kontener mx-auto md:flex md:justify-between gap-4 pb-7.5 lp:gap-20 lp:pb-10 dk:gap-25  dk:pb-12.5`}
      >
        <div className="w-full font-semibold text-[28px] text-grey-15 leading-10.5 lg:text-[30px] xl:text-[34px] lp:text-[38px] 2xl:text-[48px]">
          {title}
        </div>
        <div className="w-full pt-[15px] lg:text-[16px] lg:leading-[24px] 2xl:text-[18px] dk:leading-[27px] md:pt-0">
          {desc}
        </div>
      </div>
    </>
  );
};

DescriptionCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classList: PropTypes.string,
};
export default DescriptionCard;
