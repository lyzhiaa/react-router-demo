import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, NavLink } from "react-router";

export function NavbarComponent() {
  const navigation = [
    {
      path: "/",
      menu: "Home",
    },
    {
      path: "/about",
      menu: "About",
    },
    {
      path: "/contact",
      menu: "Contact",
    },
  ];
  return (
    <Navbar fluid rounded>
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <img
          src="https://images.vexels.com/media/users/3/142789/isolated/preview/2bfb04ad814c4995f0c537c68db5cd0b-multicolor-swirls-circle-logo.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        {navigation.map((nav) => (
          <NavLink
            style={({ isActive }) =>
              isActive ? { color: "red", fontWeight: "bold" } : undefined
            }
            to={nav.path}
          >
            {nav.menu}
          </NavLink>
        ))}
        {/* <NavLink
          style={({ isActive }) =>
            isActive ? { color: "red", fontWeight: "bold" } : undefined
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink> */}
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
      </NavbarCollapse>
    </Navbar>
  );
}
