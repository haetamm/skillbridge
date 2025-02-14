import React from "react";
import RegisterForm from "../components/pages/register/RegisterForm";
import ListTestimoniStudent from "../components/pages/register/ListTestimoniStudent";
import "../styles/register-page.css";

const RegisterPage = () => {
  return (
    <>
      <div className="flex-grow pt-[204px] xs:pt-[170px] md:pt-[202px] px-4 ">
        <div className="kontener mx-auto">
          <div className="guest-container items-center gap-12.5 lg:gap-5 xl:gap-20 dk:gap-25">
            <div className="w-full order-2 lg:order-1 space-y-10">
              <ListTestimoniStudent />
            </div>
            <div className="w-full order-1 lg:order-2 ">
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
