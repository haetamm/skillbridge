import React from "react";
import PropTypes from "prop-types";

const CardSectionAbout = ({ title, description, children }) => {
  return (
    <>
      <section className="mt-12.5 kontener mx-auto space-y-10 lp:space-y-[60px] dk:space-y-20 mb-0 xl:mb-[50px]">
        <div>
          <p className="font-medium text-2xl leading-9 lp:text-3xl lp:leading-[45px] dk:text-5xl dk:leading-[72px]">
            {title}
          </p>
          <div className="inline-block w-full gap-5 items-center justify-between sm:flex md:gap-17 lg:gap-60 xl:gap-[250px]">
            <div className="w-full mb-4 text-grey-35  sm:mb-0  text-body ">
              {description}
            </div>
          </div>
        </div>
        {children}
      </section>
    </>
  );
};

CardSectionAbout.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default CardSectionAbout;
