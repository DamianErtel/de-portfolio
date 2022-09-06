import React, { ReactNode, useContext } from "react";
import { IconWrapperLink } from "../NavBar.styled";
import { LocationContext } from "../../utils/LocationContext";

interface NavIconProps {
  to: string;
  children: ReactNode;
}

const NavIcon = ({ to, children }: NavIconProps) => {
  const location = useContext(LocationContext);
  return (
    <IconWrapperLink $active={location?.hash === to} to={to}>
      {children}
    </IconWrapperLink>
  );
};

export default NavIcon;
