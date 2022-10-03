import React, { Dispatch, SetStateAction, useContext } from "react";
import { Lightbulb, DarkMode } from "@styled-icons/material-outlined";
import { StyledNavbar, StyledLink, DarkModeButton } from "./NavBar.styled";
import { navLinks } from "../../utils/links";
import SidebarWrapper from "./utils/SidebarWrapper";
import { LocationContext } from "../../utils/LocationContext";

interface NavBarProps {
  setTheme: (value: boolean) => void;
  theme: boolean;
}

const NavBar = ({ setTheme, theme }: NavBarProps) => {
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
        <DarkModeButton
          aria-label={`enable ${theme ? "dark" : "light"} mode`}
          type="button"
          onClick={() => setTheme(!theme)}
        >
          {theme ? <DarkMode /> : <Lightbulb />}
        </DarkModeButton>
      </StyledNavbar>
      <SidebarWrapper setTheme={setTheme} theme={theme} navLinks={navLinks} />
    </>
  );
};

export default NavBar;
