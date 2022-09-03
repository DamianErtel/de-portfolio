import React from "react";
import { StyledNavbar, StyledLink } from "./navbar.styled";
import { navLinks } from "../../utils/links";

const { location } = window;

const NavBar = () => (
  <StyledNavbar>
    <ul>
      {navLinks.map(({ to, text }) => (
        <li key={`navbar-${text}`}>
          <StyledLink to={to} $active={location.hash === to}>
            {text}
          </StyledLink>
        </li>
      ))}
    </ul>
  </StyledNavbar>
);

export default NavBar;
