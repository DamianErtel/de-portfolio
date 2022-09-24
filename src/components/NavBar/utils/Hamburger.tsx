import React, { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { StyledHamburger } from "../NavBar.styled";

interface HamburgerProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const Hamburger = ({ isOpen, setIsOpen }: HamburgerProps) => {
  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    setIsOpen((prevState) => !prevState);
  };
  return (
    <StyledHamburger
      type="button"
      onMouseDown={handleClick}
      $isOpen={isOpen}
      aria-label={`${isOpen ? "Close" : "Open"} sidebar`}
    >
      <span />
      <span />
      <span />
    </StyledHamburger>
  );
};

export default Hamburger;
