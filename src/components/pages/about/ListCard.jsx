import React from "react";
import PropTypes from "prop-types";

const ListCard = ({ data }) => {
  return (
    <div className="space-y-5 grid grid-cols-1 xs:grid-cols-2 xs:space-y-0 xs:gap-5 lp:gap-6 dk:gap-7.5">
      {data.map(({ icon, title, desc }, index) => (
        <div
          key={index}
          className="p-7.5 space-y-6 rounded-[10px] bg-white lp:p-10 lp:space-y-6 dk:p-12.5 dk:space-y-7.5"
        >
          <div className="h-14 w-14 bg-primary-97 rounded-md flex items-center justify-center dk:w-[66px] dk:h-[66px] dk:p-4">
            <img
              src={`/img/${icon}`}
              alt="achievement-icon"
              className="h-7 w-7 dk:h-8.5 dk:w-85"
            />
          </div>
          <div className="space-y-1.5 lp:space-y-2.5 dk:space-y-3.5">
            <p className="font-medium text-title-card">{title}</p>
            <p className="text-grey-35 text-body">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

ListCard.propTypes = {
  data: PropTypes.array.isRequired,
};

export default ListCard;
