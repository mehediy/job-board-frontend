import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, privateNavLinks } from "../../constants";
import useAuth from "../../hooks/useAuth";

const NavDrawer = () => {
  const { user, logoutUser } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        <HamburgerIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col gap-2 text-lg">
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
          </DrawerBody>
          <DrawerFooter>
            <div>{user && <h3>Name: {user.displayName}</h3>}</div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavDrawer;
