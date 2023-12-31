import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import JobDetails from "../pages/JobDetails/JobDetails";
import AllJobs from "../pages/AllJobs/AllJobs";
import Login from "../pages/Signin/Login";
import Signup from "../pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import AddJob from "../pages/AddJob/AddJob";
import MyJobs from "../pages/MyJobs/MyJobs";
import UpdateJob from "../pages/UpdateJob/UpdateJob";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AppliedJobs from "../pages/AppliedJobs/AppliedJobs";
import Blogs from "../pages/Blogs/Blogs";
import BlogAccessToken from "../constants/BlogAccessToken";
import BlogExpressNest from "../constants/BlogExpressNest";
import BlogExplain from "../constants/BlogExplain";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "add-job",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "my-jobs",
        element: (
          <PrivateRoute>
            <MyJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "applied-jobs",
        element: (
          <PrivateRoute>
            <AppliedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "job/update/:id",
        element: (
          <PrivateRoute>
            <UpdateJob />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blogs/access-token",
        element: <BlogAccessToken />,
      },
      {
        path: "blogs/express-nest",
        element: <BlogExpressNest />,
      },
      {
        path: "blogs/explain",
        element: <BlogExplain />,
      },
    ],
  },
]);
export default routes;
