import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col px-4 ">
      <nav>
        <Navbar />
      </nav>
      <main className="flex-grow">{children}</main>
      <footer><Footer /></footer>
    </div>
  );
}

export default Layout;
