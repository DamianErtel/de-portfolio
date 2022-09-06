import React, { useState } from "react";
import Hamburger from "./Hamburger";
import { IconContainer, Sidebar } from "../NavBar.styled";
import NavIcon from "./NavIcon";
import { NavLinksProps } from "../../../utils/links";

interface SidebarWrapperProps {
  navLinks: NavLinksProps[];
}

const SidebarWrapper = ({ navLinks }: SidebarWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen}>
        <IconContainer>
          {navLinks.map(({ to, icon }: NavLinksProps) => (
            <NavIcon key={`SidebarWrapperIcon-${to}`} to={to}>
              {icon}
            </NavIcon>
          ))}
        </IconContainer>
      </Sidebar>
    </>
  );
};

export default SidebarWrapper;