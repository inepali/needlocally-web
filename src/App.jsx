import React from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layout/MainLayout";
import ProjetsPage from "./pages/ProjectsPage";
import ProjectPage from "./pages/ProjectPage";
import NotFoundPage from "./pages/NotFoundPage";
import { projectLoader, projectsLoader } from "./data/DataLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} loader={projectsLoader}/>
      <Route path="/projects" element={<ProjetsPage />} loader={projectsLoader}/>
      <Route path="/*" element={< NotFoundPage/>} />
      <Route path="/projects/:id" element={< ProjectPage />} loader={projectLoader}/>
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
