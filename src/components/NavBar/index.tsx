import React, { useContext } from "react";
import { StyledNavbar, StyledLink, StyledMobileNavbar } from "./NavBar.styled";
import { navLinks } from "../../utils/links";
import SidebarWrapper from "./utils/SidebarWrapper";
import { LocationContext } from "../utils/LocationContext";

const NavBar = () => {
  const { scrollIndex } = useContext(LocationContext);

  return (
    <>
      <StyledNavbar>
        <ul>
          {navLinks.map(({ to, text }, index) => (
            <li key={`navbar-${text}`}>
              <StyledLink to={to} $active={index === scrollIndex}>
                {text}
              </StyledLink>
            </li>
          ))}
        </ul>
      </StyledNavbar>
      <StyledMobileNavbar>
        <SidebarWrapper navLinks={navLinks} />
      </StyledMobileNavbar>
    </>
  );
};

export default NavBar;
