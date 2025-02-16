import React from "react";
import PropTypes from "prop-types";

const CardTestimonial = ({ img, user, desc }) => {
  return (
    <>
      <section
        id="testimoni-card"
        className="bg-white rounded-[10px] flex flex-col items-center dk:rounded-xl"
      >
        <div className="p-7.5 gap-2.5 lp:p-10 dk:p-12.5">
          <p className="text-body">{desc}</p>
        </div>
        <div className="bg-white-99 w-full rounded-b-md py-5 px-7.5 lp:py-6 lp:px-10 dk:py-7.5 dk:px-12.5">
          <div className="w-full flex justify-between items-center gap-2 lp:ga-2.5">
            <div className="flex space-x-2.5 items-center dk:space-x-[15px]">
              <img
                src={`/img/${img}`}
                alt="avatar"
                className="w-12.5 h-12.5 lp:rounded-md dk:w-[60px] dk:h-[60px] dk:rounded-lg"
              />
              <p className="font-semibold leading-6 text-[16px] dk:text-[18px] dk:leading-[27px]">
                {user}
              </p>
            </div>
            <button
              className="flex-shrink-0 rounded-md py-3.5 px-4 bg-white-97 font-medium text-center gap-2 dk:py-4.5 dk:px-6 dk:text-[18px] dk:leading-[27px]
                "
            >
              Read Full Story
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

CardTestimonial.propTypes = {
  img: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default CardTestimonial;
