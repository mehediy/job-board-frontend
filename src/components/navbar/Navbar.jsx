import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../../constants";
import Button from "../buttons/Button";

const Navbar = () => {
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
        </div>
        <div>
          <Link to={"/login"}>
            <Button variant={"outline"} label={"Login"} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
