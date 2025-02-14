import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { urlPage } from "./constans";

export const navLinks = [
  {
    to: urlPage.HOME,
    label: "Home",
  },
  {
    to: urlPage.COURSE,
    label: "Courses",
  },
  {
    to: urlPage.ABOUT,
    label: "About Us",
  },
  {
    to: urlPage.PRICE,
    label: "Pricing",
  },
  {
    to: urlPage.CONTACT,
    label: "Contact",
  },
];

export const linksFooter = [
  {
    to: "#",
    label: "Benefit",
  },
  {
    to: "#",
    label: "Our Courses",
  },
  {
    to: "#",
    label: "Our Testimonials",
  },
  {
    to: "#",
    label: "Our FAQ",
  },
  {
    to: "#",
    label: "Company",
  },
  {
    to: "#",
    label: "Achievements",
  },
  {
    to: "#",
    label: "Our Goals",
  },
];

export const contact = [
  {
    icon: <MdEmail className="w-5 h-5 dk:w-6 dk:h-6" />,
    label: "hello@skillbridge.com",
  },
  {
    icon: <BsFillTelephoneFill className="w-5 h-5 dk:w-6 dk:h-6" />,
    label: "+62 91813 23 2309",
  },
  {
    icon: <FaLocationDot className="w-5 h-5 dk:w-6 dk:h-6" />,
    label: "Somewhere in the World",
  },
];

export const socialMedia = [
  {
    to: "#",
    icon: <IoLogoFacebook className="w-5 h-5 dk:w-6 dk:h-6" />,
  },
  {
    to: "#",
    icon: <IoLogoTwitter className="w-5 h-5 dk:w-6 dk:h-6" />,
  },
  {
    to: "#",
    icon: <IoLogoLinkedin className="w-5 h-5 dk:w-6 dk:h-6" />,
  },
];
