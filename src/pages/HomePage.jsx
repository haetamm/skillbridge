import React from "react";
import Hero from "../components/pages/home/Hero";
import CardBenefit from "../components/pages/home/CardBenefit";
import CardFaq from "../components/CardFaq";
import CardCourses from "../components/pages/home/CardCourses";
import CardSection from "../components/CardSection";
import CardPricing from "../components/pages/home/CardPricing";
import Sponsor from "../components/pages/home/Sponsor";
import ImageCard from "../components/ImageCard";
import ListTestimonial from "../components/pages/home/ListTestimonial";

const HomePage = () => {
  const sections = [
    {
      id: "benefit",
      title: "Benefits",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
      component: <CardBenefit />,
    },
    {
      id: "courses",
      title: "Our Courses",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
      component: <CardCourses />,
    },
    {
      id: "testimoni",
      title: "Our Testimonials",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
      component: <ListTestimonial />,
    },
    {
      id: "pricing",
      title: "Our Pricing",
      description:
        "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.",
      component: <CardPricing />,
    },
  ];

  return (
    <>
      <main className="px-4 flex-grow pt-[202px] xs:pt-[145px] md:pt-[202px]">
        <Hero />

        <Sponsor />

        <div className="w-full flex justify-center">
          <ImageCard url="hero.png" />
        </div>

        {sections.map(({ id, title, description, component }) => (
          <CardSection key={id} id={id} title={title} description={description}>
            {component}
          </CardSection>
        ))}

        <CardFaq />
      </main>
    </>
  );
};

export default HomePage;
