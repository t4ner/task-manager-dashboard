import React from "react";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="text-white p-8 ">
      <Outlet />
    </div>
  );
}

export default Main;
