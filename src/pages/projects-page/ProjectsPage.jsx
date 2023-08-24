import React from "react";
import { Link } from "react-router-dom";

function ProjectsPage() {
  return <div>
     <div className="text-2xl font-bold mb-6">ProjectsPage</div>
     <Link className="text-xl underline" to="/tasks">Tasks</Link>
  </div>
}

export default ProjectsPage;
