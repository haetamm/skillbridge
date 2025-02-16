import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { contact, linksFooter, socialMedia } from "../utils/links";

const LinkFooter = ({ title, links }) => {
  return (
    <div className="flex flex-col space-y-3">
      <p className="font-semibold text-[18px] leading-[27px] dk:text-xl dk:leading-7.5">
        {title}
      </p>
      {links.map(({ to, label }, index) => (
        <Link key={index} to={to} className="text-grey-35 text-body">
          {label}
        </Link>
      ))}
    </div>
  );
};

LinkFooter.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Footer = () => {
  return (
    <>
      <footer className="w-full mt-10 bg-white pt-12.5 pb-6 px-5">
        <div className=" kontener mx-auto">
          <div className="md:flex md:justify-between ">
            <div>
              <img src="/img/Logo.png" alt="logo" className="w-10 h-10" />
              <div className="mt-8 space-y-3">
                {contact.map(({ icon, label }, index) => (
                  <div key={index} className="flex gap-1.5 items-center">
                    {icon}
                    <p className="text-[15px] leading-[22px] lp:text-[16px] lp:leading-6 dk:text-lg dk:leading-[27px]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:flex lg:justify-between lg:gap-6 dk:gap-7.5">
              <div className="mt-8 grid grid-cols-2 gap-2.5 md:gap-6 md:mt-0 dk:gap-7.5">
                <LinkFooter title="Home" links={linksFooter.slice(0, 4)} />
                <LinkFooter title="About" links={linksFooter.slice(4, 8)} />
              </div>
              <div className="mt-8 space-y-3 lg:mt-0">
                <p className="font-semibold text-[18px] leading-[27px] dk:text-xl dk:leading-7.5">
                  Social Profiles
                </p>
                <div className="flex gap-3.5">
                  {socialMedia.map(({ icon }, index) => (
                    <button
                      key={index}
                      className="h-11 w-11 bg-white-97 rounded-md border-[1px] border-white-95 flex items-center justify-center"
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <hr className="my-6" />
          <p className="text-center font-normal text-grey-40 dk:text-lg dk:leading-[27px]">
            © 2023 Skillbridge. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
