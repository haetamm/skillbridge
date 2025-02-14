import React from "react";
import { FaArrowRight } from "react-icons/fa";
import useScroll from "../hooks/useScroll";
import { useSidebar } from "../stores/sidebar";
import { LuAlignRight } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";
import { navLinks } from "../utils/links";
import { Link, useLocation } from "react-router-dom";
import { isActive, scrollTop } from "../utils/helper";
import { urlPage } from "../utils/constans";

const Navbar = () => {
  const { pathname } = useLocation();
  const { isBannerVisible, hasShadow } = useScroll();
  const { toggleSidebar, isOpen, closeSidebar } = useSidebar();

  return (
    <header className="w-full flex justify-center">
      <div
        className={` ${isBannerVisible ? "pt-5 md:pt-3" : "pt-0"} ${
          hasShadow ? "shadow-md" : ""
        } w-full px-4 fixed z-10 bg-white-90 dk:max-w-[1860px] dk:px-0`}
      >
        {isBannerVisible && (
          <section
            id="top-banner"
            className="bg-primary-50 flex justify-between rounded-md w-full items-center py-[10px] px-[16px] text-white text-sm lp:p-2.5 xs:justify-center xs:gap-[23px] dk:py-3.5 dk:text-lg dk:leading-[27px]"
          >
            <div>Free Courses 🌟 Sale Ends Soon, Get It Now</div>
            <FaArrowRight className="w-5 h-5" />
          </section>
        )}
        <nav
          className={` kontener mx-auto h-[73px] flex justify-between items-center py-[14px] lp:pt-4 lp:pb-5 `}
        >
          <div className="flex gap-6 lg:gap-12.5 items-center">
            <img
              src="/img/Logo.png"
              alt="logo"
              className="w-10 h-10 lp:w-11 lp:h-11 dk:h-[54px] dk:w-[54px]"
            />
            <ul className="hidden md:flex space-x-2.5 lg:space-x-0">
              {navLinks.map(({ to, label }, index) => (
                <Link
                  onClick={scrollTop}
                  to={to}
                  key={index}
                  className={`${
                    isActive(pathname, to) ? "bg-white-95 " : ""
                  } text-grey-15 md:py-1 md:px-2.5 lg:py-3 lg:px-5 rounded-md dk:px-6 dk:py-3.5 dk:text-lg dk:leading-[27px]`}
                >
                  {label}
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-5 xl:gap-7.5 dk:text-lg dk:leading-[27px]">
            <Link
              onClick={() => {
                closeSidebar();
                scrollTop();
              }}
              to={urlPage.SIGNUP}
              className="cursor-pointer"
            >
              Sign Up
            </Link>
            <button className=" cursor-pointer bg-primary-50 py-3 px-5 rounded-md text-white">
              Login
            </button>
            <button
              className="md:hidden"
              onClick={() => {
                toggleSidebar();
              }}
            >
              {isOpen ? (
                <AiOutlineClose className="w-[34px] h-[34px]" />
              ) : (
                <LuAlignRight className="w-[34px] h-[34px]" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
