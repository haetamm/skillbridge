import React from "react";
import PropTypes from "prop-types";

const ImageCard = ({ url }) => {
  return (
    <>
      <div className=" px-3 kontener py-1 bg-white-97 w-[320px] h-[255px] xxs:h-[255px] xs:h-[471px] md:h-[389px] md:px-1 lg:h-[529px] lg:px-3 xl:h-[606px] xl:px-0 lp:min-h-[657px] dk:min-h-[814px] dk:px-0 rounded-md">
        <img
          src={`/img/${url}`}
          alt="ui-ux-img"
          className="object-cover kontener font-bold w-[320px] h-[247px] xxs:h-[247px] xs:h-[463px]  md:h-[381px] lg:h-[521px] xl:h-[598px] lp:min-h-[649px]  dk:min-h-[806px]"
        />
      </div>
    </>
  );
};

ImageCard.propTypes = {
  url: PropTypes.string.isRequired,
};

export default ImageCard;
