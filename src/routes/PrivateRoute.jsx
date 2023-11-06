import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/loader/Spinner";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-screen w-full">
        <Spinner />
      </div>
    );
  }
  if (user) return children;
  return (
    <>
      <Navigate state={location.pathname} to={"/login"} />
      {toast.error("You have to log in first to view details")}
    </>
  );
};

export default PrivateRoute;
