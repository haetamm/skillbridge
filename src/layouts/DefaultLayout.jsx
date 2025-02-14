import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/SIdebar";

const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col">
        <Outlet />
        <Footer />
      </section>
      <Sidebar />
    </>
  );
};

export default DefaultLayout;
