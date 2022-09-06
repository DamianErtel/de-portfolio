import React, { ReactNode } from "react";
import { Home, Work, Phone, List } from "@styled-icons/material-outlined";

export interface NavLinksProps {
  to: string;
  text: string;
  icon: ReactNode;
}

export const navLinks: NavLinksProps[] = [
  { to: "#home", text: "Home", icon: <Home /> },
  { to: "#skills", text: "Skills", icon: <List /> },
  { to: "#experience", text: "Experience", icon: <Work /> },
  { to: "#contact", text: "Contact", icon: <Phone /> },
];