import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@nextui-org/react";
import { UserContext } from "../../Context/UserContext";
import cart from "../../assets/shopping-cart.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { userLogin, setuserLogin } = useContext(UserContext);
  let navigate = useNavigate();

  function singOut() {
    localStorage.removeItem("userToken");
    setuserLogin(null);
    navigate("/login");
  }

  const menuItems = ["Home", "Cart", "Wishlist", "allorders"];

  return (
    <NextUiNavbar shouldHideOnScroll onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        {userLogin ? (
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden "
          />
        ) : null}
        <NavbarBrand as={Link} to="/">
          <img src={cart} alt="shopping-cart" className="w-8 h-8 me-2" />
          <span className="font-bold text-lg lg:text-2xl mr-8">Cartify</span>
        </NavbarBrand>

        {userLogin ? (
          <NavbarContent
            className="hidden sm:flex gap-4  font-bold"
            justify="center"
          >
            <NavbarItem>
              <NavLink
                to=""
                color="foreground"
                className={({ isActive }) =>
                  `text-lg  ${isActive ? "text-blue-500" : ""}`
                }
              >
                Home
              </NavLink>
            </NavbarItem>

            <NavbarItem>
              <NavLink
                to="/cart"
                color="foreground"
                className={({ isActive }) =>
                  `text-lg  ${isActive ? "text-blue-500" : ""}`
                }
              >
                Cart
              </NavLink>
            </NavbarItem>

            <NavbarItem>
              <NavLink
                to="/wishlist"
                color="foreground"
                className={({ isActive }) =>
                  `text-lg  ${isActive ? "text-blue-500" : ""}`
                }
              >
                Wishlist
              </NavLink>
            </NavbarItem>

            <NavbarItem>
              <NavLink
                to="/allorders"
                color="foreground"
                className={({ isActive }) =>
                  `text-lg  ${isActive ? "text-blue-500" : ""}`
                }
              >
                Orders
              </NavLink>
            </NavbarItem>
          </NavbarContent>
        ) : null}
      </NavbarContent>

      <NavbarContent justify="end">
        {userLogin ? (
          <NavbarItem>
            <Button onPress={singOut} color="primary" size="sm" variant="ghost">
              Sign Out
            </Button>
          </NavbarItem>
        ) : (
          <>
            <NavbarItem>
              <Button
                as={Link}
                to="/login"
                color="primary"
                size="sm"
                variant="ghost"
              >
                Log In
              </Button>
            </NavbarItem>

            <NavbarItem>
              <Button
                as={Link}
                to="/register"
                color="primary"
                size="sm"
                variant="ghost"
              >
                Sign Up
              </Button>
            </NavbarItem>
          </>
        )}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <NavLink
              className={({ isActive }) =>
                `text-lg w-full ${isActive ? "text-blue-500" : ""}`
              }
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              to={index > 0 ? `/${item.toLowerCase()}` : "/"}
              size="lg"
            >
              {item}
            </NavLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUiNavbar>
  );
}

export default Navbar;
