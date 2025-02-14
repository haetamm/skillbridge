import React from "react";
import { dataTestimoni } from "../../../utils/data";
import CardTestimonial from "./CardTestimonial";

const ListTestimonial = () => {
  return (
    <>
      <section className="grid grid-col-1 gap-5 md:grid-cols-2 dk:gap-7.5">
        {dataTestimoni.map((data, index) => (
          <CardTestimonial key={index} {...data} />
        ))}
      </section>
    </>
  );
};

export default ListTestimonial;
