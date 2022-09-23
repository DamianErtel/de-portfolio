import React, { ReactNode } from "react";
import {
  Home,
  Work,
  Phone,
  List,
  Assignment,
} from "@styled-icons/material-outlined";

export interface NavLinkProps {
  to: string;
  text: string;
  icon: ReactNode;
}

export const navLinks: NavLinkProps[] = [
  { to: "#home", text: "Home", icon: <Home /> },
  { to: "#skills", text: "Skills", icon: <List /> },
  { to: "#experience", text: "Experience", icon: <Work /> },
  { to: "#projects", text: "Projects", icon: <Assignment /> },
  { to: "#contact", text: "Contact", icon: <Phone /> },
];
