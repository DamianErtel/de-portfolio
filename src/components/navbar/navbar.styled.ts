import styled from "styled-components";
import { Link } from "gatsby";

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
      }
    }
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
