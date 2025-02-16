import React from "react";
import { dataBenefits } from "../../../utils/data";
import { RxArrowTopRight } from "react-icons/rx";

const CardBenefit = () => {
  return (
    <>
      <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {dataBenefits.map(({ id, title, body }, index) => (
          <section
            id="benefit-card"
            key={index}
            className="bg-white p-7.5 rounded-md space-y-7.5 flex flex-col h-full lp:rounded-[10px] lp:space-y-10 lp:p-10 dk:rounded-xl dk:space-y-12.5 dk:p-12.5 "
          >
            <div className="text-[50px] leading-6 text-end lp:text-6xl lp:font-bold lp:leading-6 dk:text-[80px]">
              {id}
            </div>

            <div className="space-y-2.5 flex-grow dk:space-y-3.5">
              <p className="font-semibold text-sub-title">{title}</p>
              <p className="text-grey-30 text-body">{body}</p>
            </div>

            <div className="flex justify-end mt-auto">
              <div className="cursor-pointer p-3.5 bg-white-95 h-[54px] w-[54px] flex items-center justify-center rounded-md lp:gap-2 dk:w-[74px] dk:h-[74px] dk:rounded-lg">
                <RxArrowTopRight className="w-6.5 h-6.5 text-primary-50 dk:w-8.5 dk:h-8.5" />
              </div>
            </div>
          </section>
        ))}
      </section>
    </>
  );
};

export default CardBenefit;
