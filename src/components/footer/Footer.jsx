import { Link, NavLink } from "react-router-dom";
import { navLinks, privateNavLinks, socialLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container mx-auto h-full padding flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-light py-4">
          <div className="space-y-2">
            <h3 className="font-bold text-2xl text-primary">Jobs</h3>
            <p>Find your favorite job</p>
            <p className="text-sm">7A, Road 2, Dhanmondi, Dhaka, 1205</p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Explore</h3>
            {navLinks.map((item, idx) => (
              <NavLink
                key={idx}
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
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">For Users</h3>
            {privateNavLinks.map((item, idx) => (
              <NavLink
                key={idx}
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
          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Social</h3>
            {socialLinks.map((item, idx) => (
              <Link
                key={idx}
                className="font-medium hover:text-brand-primary ease"
                to={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center sm:justify-between text-light text-sm">
          <p>© 2023 Jobs. All Rights Reserved.</p>
          <div className="space-x-4">
            <Link to={"#"}>Terms of Service</Link>
            <Link to={"#"}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
