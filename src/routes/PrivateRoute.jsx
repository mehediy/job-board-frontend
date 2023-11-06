import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/loader/Spinner";
import useAuth from "../context/useAuth";

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
  return <Navigate state={location.pathname} to={"/login"} />;
};

export default PrivateRoute;
