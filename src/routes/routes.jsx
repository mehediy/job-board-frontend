import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import AllJobs from "../pages/AllJobs/AllJobs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all-jobs",
        element: <AllJobs />,
      },
      {
        path: "job/:id",
        element: <JobDetails />,
      },
    ],
  },
]);
export default routes;
