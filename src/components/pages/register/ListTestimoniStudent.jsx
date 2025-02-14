import { useCarousel } from "../../../hooks/useCarousel";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { dataTestimoni } from "../../../utils/data";
import CardTestimonial from "../home/CardTestimonial";

const ListTestimoniStudent = () => {
  const { currentIndex, handlePrev, handleNext, isSliding } = useCarousel(
    dataTestimoni.length
  );

  return (
    <>
      <div className="space-y-1">
        <p className="font-medium text-[28px] leading-10.5">
          Students Testimonials
        </p>
        <p className="text-grey-35 lg:text-[16px] lg:leading-6 dk:text-lg dk:leading-[27px]">
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>
      <div className="relative w-full flex flex-col items-center overflow-hidden">
        <div
          className="w-full flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {dataTestimoni.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <CardTestimonial {...testimonial} />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center gap-2.5 items-center mt-5 xs:justify-end">
          <button
            onClick={handlePrev}
            disabled={isSliding}
            className="cursor-pointer w-[54px] h-[54px] bg-white flex items-center justify-center rounded-md shadow-md"
          >
            <FaArrowLeft className="w-7.5 h-7.5" />
          </button>
          <button
            onClick={handleNext}
            disabled={isSliding}
            className="cursor-pointer w-[54px] h-[54px] bg-white flex items-center justify-center rounded-md shadow-md"
          >
            <FaArrowRight className="w-7.5 h-7.5" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ListTestimoniStudent;
