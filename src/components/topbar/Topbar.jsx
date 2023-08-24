import React from "react";
import Logo from "../logo/logo.jpg";
function Topbar() {
  return (
    <div className="flex justify-end border-b border-gray-500 text-white">
      <div className=" flex items-center gap-4 bg-sky-900 p-4">
        <img src={Logo} className="w-10 h-10 rounded-full" />
        <div>
          <h3 className="font-semibold">Taner Dökmetaş</h3>
          <p className="text-gray-400">Admin</p>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
