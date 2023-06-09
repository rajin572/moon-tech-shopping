import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const Main = () => {
  return (
    <div className='px-10'>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;