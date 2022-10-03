import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { DarkMode, Lightbulb } from "@styled-icons/material-outlined";
import Hamburger from "./Hamburger";
import { DarkModeButton, IconContainer, Sidebar } from "../NavBar.styled";
import NavIcon from "./NavIcon";
import { NavLinkProps } from "../../../utils/links";
import useOutsideAlerter from "../../../hooks/useOutsideClick";

interface SidebarWrapperProps {
  navLinks: NavLinkProps[];
  setTheme: (value: boolean) => void;
  theme: boolean;
}

const SidebarWrapper = ({ navLinks, setTheme, theme }: SidebarWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const handleClickOutside = () => {
    setIsOpen(false);
  };
  useOutsideAlerter({
    ref,
    callback: handleClickOutside,
    currentState: isOpen,
  });
  return (
    <>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar ref={ref} isOpen={isOpen}>
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
            onClick={() => setTheme(!theme)}
          >
            {theme ? <DarkMode /> : <Lightbulb />}
          </DarkModeButton>
        </IconContainer>
      </Sidebar>
    </>
  );
};

export default SidebarWrapper;
