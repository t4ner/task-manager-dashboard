import React from "react";
import { Link } from "react-router-dom";

function SettingsPage() {
  return (
    <div>
      <div className="text-2xl font-bold mb-6">SettingsPage </div>
      <Link className="text-xl underline" to="/">
        Home
      </Link>
    </div>
  );
}

export default SettingsPage;
