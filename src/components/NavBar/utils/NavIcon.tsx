import React, { ReactNode } from "react";
import { IconWrapperLink } from "../NavBar.styled";

interface NavIconProps {
  to: string;
  children: ReactNode;
}

const { location } = window;

const NavIcon = ({ to, children }: NavIconProps) => (
  <IconWrapperLink $active={location.hash === to} to={to}>
    {children}
  </IconWrapperLink>
);

export default NavIcon;
