import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sidebar from "../components/SIdebar";

const DefaultLayout = () => {
  useEffect(() => {
    const preventDeveloperTools = (event) => {
      // Mencegah context menu (klik kanan)
      if (event.type === "contextmenu") {
        event.preventDefault();
      }
      // Mencegah pembukaan developer tools dengan F12
      if (event.key === "F12") {
        event.preventDefault();
      }
      // Mencegah kombinasi Ctrl+Shift+I (Inspect Element)
      if (event.ctrlKey && event.shiftKey && event.key === "I") {
        event.preventDefault();
      }
      // Mencegah kombinasi Ctrl+Shift+J (Console)
      if (event.ctrlKey && event.shiftKey && event.key === "J") {
        event.preventDefault();
      }
      // Mencegah kombinasi Ctrl+U (View Page Source)
      if (event.ctrlKey && event.key === "U") {
        event.preventDefault();
      }
    };

    // Menambahkan event listeners
    document.addEventListener("contextmenu", preventDeveloperTools);
    document.addEventListener("keydown", preventDeveloperTools);

    // Membersihkan event listeners saat komponen unmount
    return () => {
      document.removeEventListener("contextmenu", preventDeveloperTools);
      document.removeEventListener("keydown", preventDeveloperTools);
    };
  }, []);
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
