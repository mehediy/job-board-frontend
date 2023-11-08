import { Link, NavLink, useNavigate } from "react-router-dom";
import { navLinks, privateNavLinks } from "../../constants";
import Button from "../buttons/Button";
import useAuth from "../../hooks/useAuth";
import NavDrawer from "./Drawer";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="bg-primary text-primary border border-b-2 border-dark">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="block lg:hidden">
          <NavDrawer />
        </div>
        <Link to={"/"}>
          <h2 className="text-3xl font-bold">Jobs</h2>
        </Link>
        <div className="hidden lg:flex gap-6 text-lg">
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
                className="hidden lg:block w-[48px] h-[48px] object-cover rounded-full"
                src={user?.photoURL}
                title={user?.displayName}
              />
              <Button
                variant={"outline"}
                label={"Logout"}
                onClick={() => logoutUser().then(() => navigate("/"))}
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
