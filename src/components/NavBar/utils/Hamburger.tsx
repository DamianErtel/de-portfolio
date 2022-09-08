import React from "react";
import { StyledHamburger } from "../NavBar.styled";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: (cb: (value: boolean) => boolean) => void;
}

const Hamburger = ({ isOpen, setIsOpen }: HamburgerProps) => (
  <StyledHamburger
    type="button"
    onClick={() => setIsOpen((prevState) => !prevState)}
    $isOpen={isOpen}
    aria-label="open sidebar"
  >
    <span />
    <span />
    <span />
  </StyledHamburger>
);

export default Hamburger;
