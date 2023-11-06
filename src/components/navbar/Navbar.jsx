import { Link, NavLink } from "react-router-dom";
import { navLinks, privateNavLinks } from "../../constants";
import Button from "../buttons/Button";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const logoutHandler = () => {
    logoutUser()
      .then(() => toast.success("Logged out!"))
      .catch((error) => toast.error(error.message));
  };
  return (
    <nav className="bg-primary text-primary border border-b-2 border-dark">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to={"/"}>
          <h2 className="text-3xl font-bold">Jobs</h2>
        </Link>
        <div className="flex gap-6 text-lg">
          {navLinks.map((item) => (
            <NavLink
              key={item.href}
              className={({ isActive }) =>
                isActive
                  ? "text-brand-primary font-bold"
                  : "font-medium hover:text-brand-primary ease"
              }
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Private Links */}
          {user &&
            privateNavLinks.map((item) => (
              <NavLink
                key={item.href}
                className={({ isActive }) =>
                  isActive
                    ? "text-brand-primary font-bold"
                    : "font-medium hover:text-brand-primary ease"
                }
                to={item.href}
              >
                {item.label}
              </NavLink>
            ))}
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <img
                className="w-[48] h-[48px] rounded-full"
                src={user?.photoURL}
                title={user?.displayName}
              />
              <Button
                variant={"outline"}
                label={"Logout"}
                onClick={logoutHandler}
              />
            </div>
          ) : (
            <Link to={"/login"}>
              <Button variant={"outline"} label={"Login"} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
