import React, { ReactNode } from "react";
import { IconWrapperLink } from "../NavBar.styled";

interface NavIconProps {
  to: string;
  children: ReactNode;
  location: Location;
}

const NavIcon = ({ to, children, location }: NavIconProps) => (
  <IconWrapperLink $active={location.hash === to} to={to}>
    {children}
  </IconWrapperLink>
);

export default NavIcon;
