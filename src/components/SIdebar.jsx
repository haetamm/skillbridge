import React from "react";
import { navLinks } from "../utils/links";
import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../stores/sidebar";
import { isActive, scrollTop } from "../utils/helper";
import useScroll from "../hooks/useScroll";

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();
  const { isBannerVisible } = useScroll();
  const { pathname } = useLocation();

  return (
    <>
      <section
        id="sidebar"
        className={`fixed md:hidden left-0 top-0 w-full bg-primary-50 transform transition-transform duration-300 z-2 shadow-lg ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul
          className={`${
            isBannerVisible ? "pt-20" : "xs:pt-5"
          } px-4 space-y-3 mt-25 mb-8 grid grid-cols-2 gap-2 xs:grid-cols-3`}
        >
          {navLinks.map(({ label, to }, index) => (
            <li key={index} className="">
              <Link
                onClick={() => {
                  closeSidebar();
                  scrollTop();
                }}
                to={to}
                className={`  block  font-bold hover:bg-white hover:text-black hover:rounded-none `}
              >
                <p
                  className={`${
                    isActive(pathname, to)
                      ? "bg-white-95 "
                      : "text-white  border-[1px]"
                  } rounded-lg py-2 px-3 w-32 text-center`}
                >
                  {label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Sidebar;
