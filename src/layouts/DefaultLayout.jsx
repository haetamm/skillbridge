import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/SIdebar";
import { AppProvider } from "../contexts/AppProvider";
import ToggleDarkMode from "../components/ToggleDarkMode";

const DefaultLayout = () => {
  return (
    <>
      <AppProvider>
        <Navbar />
        <ToggleDarkMode />
        <section className="min-h-screen flex flex-col">
          <Outlet />
          <Footer />
        </section>
        <Sidebar />
      </AppProvider>
    </>
  );
};

export default DefaultLayout;
