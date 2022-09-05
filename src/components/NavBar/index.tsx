import React from "react";
import { presets } from "react-text-transition";
import {
  StyledNavbar,
  StyledLink,
  StyledMobileNavbar,
  StyledTextTransition,
} from "./NavBar.styled";
import { navLinks } from "../../utils/links";
import SidebarWrapper from "./utils/SidebarWrapper";

const { location } = window;

const NavBar = () => {
  const currentSection = navLinks.find(({ to }) => to === location.hash)?.text;
  return (
    <>
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
      <StyledMobileNavbar>
        <StyledTextTransition springConfig={presets.wobbly}>
          <h2>{currentSection}</h2>
        </StyledTextTransition>
        <SidebarWrapper navLinks={navLinks} />
      </StyledMobileNavbar>
    </>
  );
};

export default NavBar;
