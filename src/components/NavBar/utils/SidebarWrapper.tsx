import React, { useState } from "react";
import Hamburger from "./Hamburger";
import { IconContainer, Sidebar } from "../NavBar.styled";
import NavIcon from "./NavIcon";
import { NavLinksProps } from "../../../utils/links";

const SidebarWrapper = ({
  navLinks,
  location,
}: {
  navLinks: NavLinksProps[];
  location: Location;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen}>
        <IconContainer>
          {navLinks.map(({ to, icon }: NavLinksProps) => (
            <NavIcon
              location={location}
              key={`SidebarWrapperIcon-${to}`}
              to={to}
            >
              {icon}
            </NavIcon>
          ))}
        </IconContainer>
      </Sidebar>
    </>
  );
};

export default SidebarWrapper;
