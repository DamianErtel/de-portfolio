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
          {navLinks.map(({ to, icon }: NavLinkProps) => (
            <li key={`SidebarWrapperIcon-${to}`}>
              <NavIcon to={to}>{icon}</NavIcon>
            </li>
          ))}
        </IconContainer>
      </Sidebar>
    </>
  );
};

export default SidebarWrapper;
