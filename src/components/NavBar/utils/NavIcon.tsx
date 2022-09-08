import React, { ReactNode, useContext } from "react";
import { IconWrapperLink } from "../NavBar.styled";
import { LocationContext } from "../../utils/LocationContext";

interface NavIconProps {
  to: string;
  text: string;
  children: ReactNode;
  index: number;
}

const NavIcon = ({ to, children, index, text }: NavIconProps) => {
  const { scrollIndex } = useContext(LocationContext);
  return (
    <IconWrapperLink aria-label={text} $active={index === scrollIndex} to={to}>
      {children}
    </IconWrapperLink>
  );
};

export default NavIcon;
