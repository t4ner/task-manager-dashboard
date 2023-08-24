import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/home-page/HomePage.jsx";
import MainLayout from "./layouts/main-layout/MainLayout";
import TaskPage from "./pages/task-page/TaskPage";
import ProjectsPage from "./pages/projects-page/ProjectsPage";
import SettingsPage from "./pages/settings-page/SettingsPage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        {
          element: <MainLayout />,
          children: [
            {
              path: "/",
              element: <HomePage />,
            },
            {
              path: "/tasks",
              element: <TaskPage />,
            },
            {
              path: "/projects",
              element: <ProjectsPage />,
            },
            {
              path: "/settings",
              element: <SettingsPage />,
            },
          ],
        },
      ])}
    />
  </React.StrictMode>
);
