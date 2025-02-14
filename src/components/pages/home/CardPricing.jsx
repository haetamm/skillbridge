import React from "react";
import { IoCheckmark, IoCloseOutline } from "react-icons/io5";
import { dataPackage, featureList } from "../../../utils/data";

const CardPricing = () => {
  return (
    <section
      id="pricing-card"
      className="w-full mx-auto bg-white rounded-md p-5 lp:p-12.5 dk:p-20"
    >
      <section className="grid grid-cols-1 gap-7.5 md:grid-cols-2 md:gap-5 xl:gap-7.5">
        {dataPackage.map(
          ({ packageName, price, duration, features }, index) => (
            <div
              key={index}
              className="bg-white-99 rounded-xl py-7.5 space-y-7.5 px-5 lp:pt-10 lp:px-6 lp:pb-6 lp:space-y-12.5  dk:pt-12.5 dk:px-7.5 dk:pb-7.5 "
            >
              <div className="text-center bg-primary-90 text-grey-15 py-2 rounded-md leading-7.5 font-semibold lp:py-2.5 lp:px-5.5 lp:text-[18px] dk:py-3 ">
                {packageName}
              </div>
              <div className="text-center ">
                <span className="text-[50px] font-semibold leading-[36px] lp:text-6xl lp:leading-[43px] dk:text-[80px] dk:leading-[58px] ">
                  {price}
                </span>
                <span className="text-grey-30 lp:text-[16px] lp:leading-[11px] dk:text-xl dk:leading-3.5">
                  {" "}
                  /{duration}
                </span>
              </div>
              <div>
                <div className="bg-white p-5 rounded-t-[10px] space-y-5 lp:p-7.5 lp:space-y-6 lp:rounded-t-[14px] dk:p-10">
                  <div className="text-center font-medium text-[18px] leading-[27px] dk:text-xl dk:leading-7.5 ">
                    Available Features
                  </div>
                  <ul className="space-y-5 lp:px-7.5">
                    {featureList.map((feature, featureIndex) => {
                      const isFeatureIncluded = features.includes(feature);
                      return (
                        <li
                          key={featureIndex}
                          className="w-full flex space-x-2 items-start bg-white-95 p-3 rounded-md lp:gap-2 lp:p-3 dk:p-3.5 dk:gap-3 dk:rounded-lg"
                        >
                          <div
                            className={`p-1 h-6 w-6 dk:h-8 dk:w-8 dk:p-1.5 rounded-sm ${
                              isFeatureIncluded ? "bg-primary-95" : "bg-white"
                            }`}
                          >
                            {isFeatureIncluded ? (
                              <IoCheckmark className="w-4 h-4" />
                            ) : (
                              <IoCloseOutline className="w-4 h-4" />
                            )}
                          </div>
                          <p className="text-grey-30 dk:text-[18px] leading-[27px]">
                            {feature}
                          </p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <button className="cursor-pointer w-full bg-primary-50 text-white py-4.5 px-6 rounded-b-md font-semibold dk:rounded-b-lg dk:py-5 dk:px-6 dk:text-[18px] dk:leading-27px]">
                  Get Started
                </button>
              </div>
            </div>
          )
        )}
      </section>
    </section>
  );
};

export default CardPricing;
