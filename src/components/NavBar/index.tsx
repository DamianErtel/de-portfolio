import React, { useContext, useEffect, useState } from "react";
import { presets } from "react-text-transition";
import {
  StyledNavbar,
  StyledLink,
  StyledMobileNavbar,
  StyledTextTransition,
} from "./NavBar.styled";
import { navLinks } from "../../utils/links";
import SidebarWrapper from "./utils/SidebarWrapper";
import { LocationContext } from "../utils/LocationContext";

const NavBar = () => {
  const location = useContext(LocationContext);

  const [header, setHeader] = useState<string | null>(null);

  useEffect(() => {
    if (location) {
      const currentSection = navLinks.find(
        ({ to }) => to === location?.hash
      )?.text;
      if (currentSection != null) {
        setHeader(currentSection);
      }
    }
  }, [location]);

  return (
    <>
      <StyledNavbar>
        <ul>
          {navLinks.map(({ to, text }) => (
            <li key={`navbar-${text}`}>
              <StyledLink to={to} $active={location?.hash === to}>
                {text}
              </StyledLink>
            </li>
          ))}
        </ul>
      </StyledNavbar>
      <StyledMobileNavbar>
        <StyledTextTransition springConfig={presets.wobbly}>
          <h2>{header}</h2>
        </StyledTextTransition>
        <SidebarWrapper navLinks={navLinks} />
      </StyledMobileNavbar>
    </>
  );
};

export default NavBar;
