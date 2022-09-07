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
  const { location, scrollIndex } = useContext(LocationContext);

  const [header, setHeader] = useState<string | null>(null);

  useEffect(() => {
    const currentSection = navLinks.find(
      (_val, index) => index === scrollIndex
    )?.text;
    if (currentSection != null) {
      setHeader(currentSection);
    }
  }, [scrollIndex]);

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
        <StyledTextTransition springConfig={presets.wobbly}>
          <h2>{header}</h2>
        </StyledTextTransition>
        <SidebarWrapper navLinks={navLinks} />
      </StyledMobileNavbar>
    </>
  );
};

export default NavBar;
