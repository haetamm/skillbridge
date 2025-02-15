import React from "react";

import ListTestimoniStudent from "../components/pages/register/ListTestimoniStudent";
import "../styles/register-page.css";
import Divider from "../components/pages/register/Divider";
import ButtonGoogle from "../components/pages/register/ButtonGoogle";
import { Link } from "react-router-dom";
import { urlPage } from "../utils/constans";
import { registerFields } from "../utils/fields";
import HeaderPage from "../components/pages/register/HeaderPage";
import { scrollTop } from "../utils/helper";
import FormCustom from "../components/pages/register/FormCustom";

const RegisterPage = () => {
  return (
    <>
      <div className="flex-grow pt-[204px] xs:pt-[170px] md:pt-[202px] px-4 mb-0 xl:mb-[50px]">
        <div className="kontener mx-auto">
          <div className="guest-container items-center gap-12.5 lg:gap-5 xl:gap-20 dk:gap-25">
            <div className="w-full order-2 lg:order-1 space-y-10 dk:space-y-20">
              <ListTestimoniStudent />
            </div>
            <div className="w-full order-1 lg:order-2 ">
              <div className="w-full flex flex-col items-center justify-center bg-white rounded-[10px] p-7.5 space-y-7.5 lp:space-y-10 lp:p-10 dk:p-12.5 dk:space-y-12.5">
                <HeaderPage
                  name="Sign Up"
                  desc="Create an account to unlock exclusive features."
                />

                <div className="w-full space-y-6 dk:space-y-12.5">
                  <FormCustom fields={registerFields} />
                  <Divider />
                  <ButtonGoogle />

                  <p className=" text-center text-gray-600 lp:text-[16px] lp:leading-6 dk:text-lg dk:leading-[27px]">
                    Already have an account?{" "}
                    <Link onClick={scrollTop} to={urlPage.SIGNIN}>
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
