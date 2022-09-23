import React, { Dispatch, SetStateAction, useState } from "react";
import Hamburger from "./Hamburger";
import { DarkModeButton, IconContainer, Sidebar } from "../NavBar.styled";
import NavIcon from "./NavIcon";
import { NavLinkProps } from "../../../utils/links";
import { DarkMode, Lightbulb } from "@styled-icons/material-outlined";

interface SidebarWrapperProps {
  navLinks: NavLinkProps[];
  setTheme: Dispatch<SetStateAction<boolean>>;
  theme: boolean;
}

const SidebarWrapper = ({ navLinks, setTheme, theme }: SidebarWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen}>
        <IconContainer>
          {navLinks.map(({ to, icon, text }: NavLinkProps, index) => (
            <li key={`SidebarWrapperIcon-${to}`}>
              <NavIcon text={text} index={index} to={to}>
                {icon}
              </NavIcon>
            </li>
          ))}
          <DarkModeButton
            $mobile
            aria-label={`enable ${theme ? "dark" : "light"} mode`}
            type="button"
            onClick={() => setTheme((prevState: boolean) => !prevState)}
          >
            {theme ? <DarkMode /> : <Lightbulb />}
          </DarkModeButton>
        </IconContainer>
      </Sidebar>
    </>
  );
};

export default SidebarWrapper;
