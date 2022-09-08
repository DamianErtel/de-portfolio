import React, { useState } from "react";
import Hamburger from "./Hamburger";
import { IconContainer, Sidebar } from "../NavBar.styled";
import NavIcon from "./NavIcon";
import { NavLinkProps } from "../../../utils/links";

interface SidebarWrapperProps {
  navLinks: NavLinkProps[];
}

const SidebarWrapper = ({ navLinks }: SidebarWrapperProps) => {
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
        </IconContainer>
      </Sidebar>
    </>
  );
};

export default SidebarWrapper;
