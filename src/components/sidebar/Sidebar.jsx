import React from "react";
import Logo from "../logo/Logo";
import NagivationMenu from "../navigation-menu/NagivationMenu";

function Sidebar() {
  return (
    <div className="flex flex-col gap-4 w-96 p-7 text-white h-screen border-r border-gray-500">
      <Logo />
      <NagivationMenu />
    </div>
  );
}

export default Sidebar;
