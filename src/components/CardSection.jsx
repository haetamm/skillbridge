import React from "react";
import PropTypes from "prop-types";
import TogglePrice from "./TogglePrice";

const SectionCard = ({ id, title, description, children }) => {
  return (
    <>
      <section
        id={id}
        className="mt-12.5 kontener mx-auto space-y-10 lp:space-y-[60px] dk:space-y-20"
      >
        <div>
          <p className="font-semibold text-[28px] leading-10.5 lg:text-[30px] lg:leading-[57px] lp:text-[38px] lp:leading-[57px] dk:text-5xl dk:leading-[72px]">
            {title}
          </p>
          <div className="inline-block w-full gap-5 items-center justify-between sm:flex md:gap-17 lg:gap-60 xl:gap-[250px]">
            <div className="w-full mb-4 text-grey- font-normal sm:mb-0  lg:text-base  dk:text-lg dk:leading-[27px] ">
              {description}
            </div>
            {id &&
              (id === "pricing" ? (
                <TogglePrice />
              ) : (
                <button className="flex shrink-0 justify-center cursor-pointer px-5 py-3.5 rounded-md border-[1px] bg-white-99 border-white-95 sm:w-24 sm:px-3  gap-2">
                  View All
                </button>
              ))}
          </div>
        </div>
        {children}
      </section>
    </>
  );
};

SectionCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SectionCard;
