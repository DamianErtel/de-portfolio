import styled from "styled-components";
import { Link } from "gatsby";
import TextTransition from "react-text-transition";

export const IconContainer = styled.ul`
  min-height: 300px;
  list-style-type: none;
  margin: 100px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const IconWrapperLink = styled(Link)<{ $active: boolean }>`
  position: relative;
  svg {
    transition: color 1s ease-in-out;
    width: 40px;
    height: 40px;
    color: ${({ theme, $active }) =>
      $active
        ? theme.palette.secondary.main
        : theme.palette.primary.contrastText};
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  background-color: ${({ theme }) => theme.palette.primary.light};
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  ul {
    display: flex;
    width: 440px;
    justify-content: space-between;
    list-style-type: none;
    li {
      a {
        transition: color 0.3s ease-in-out;
      }
    }
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)<{ $active: boolean }>`
  font-size: 2rem;
  color: ${({ theme, $active }) =>
    $active
      ? theme.palette.secondary.main
      : theme.palette.secondary.contrastText};
  font-weight: bold;
  text-decoration: none;
`;

export const StyledTextTransition = styled(TextTransition)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const StyledMobileNavbar = styled.nav`
  width: 100vw;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.light};
  @media screen and (min-width: 601px) {
    display: none;
  }
`;

export const StyledHamburger = styled.button<{ $isOpen: boolean }>`
  z-index: 100;
  width: 40px;
  height: 40px;
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: 30px;
  border: none;
  background: none;
  span {
    background-color: ${({ theme }) => theme.palette.primary.contrastText};
    width: 30px;
    height: 2px;
    margin-top: 6px;
    display: block;
    transition: all 0.3s ease;
    position: relative;
    top: 0;
    &:first-child {
      margin-top: 0;
      ${({ $isOpen }) => $isOpen && "top: 8px;"};
    }
    &:nth-child(2) {
      ${({ $isOpen, theme }) =>
        $isOpen && `background-color: ${theme.palette.secondary.main};`};
      transition: all 0.2s ease-in-out;
      transition-delay: 0.3s;
      z-index: 200;
    }
    &:last-child {
      top: 0;
      ${({ $isOpen }) => $isOpen && "top: -8px;"};
    }
  }
`;

export const Sidebar = styled.nav<{ isOpen: boolean }>`
  width: 100%;
  max-width: ${({ isOpen }) => (isOpen ? "100px" : "0")};
  height: calc(100vh - 60px);
  position: fixed;
  right: 0;
  top: 60px;
  z-index: 100;
  transition: max-width 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.palette.primary.light};
  display: flex;
  flex-flow: column;
  overflow: hidden;
  hr {
    margin: 15px auto 20px;
    width: 30px;
    transition: width 0.3s ease-in-out;
  }
  div,
  p {
    color: ${({ theme }) => theme.palette.common.white};
  }
  a {
    text-decoration: none;
  }
  span {
    font-size: 1.6rem;
  }
  svg {
    font-size: 2.4rem;
  }
`;
