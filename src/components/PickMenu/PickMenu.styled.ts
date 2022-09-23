import styled from "styled-components";

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 700px;
  @media screen and (max-width: 720px) {
    width: 522px;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: auto;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  justify-content: space-between;
  margin-right: 40px;
  @media screen and (max-width: 600px) {
    flex-direction: row;
    margin: 20px auto;
    width: 95vw;
    height: auto;
    justify-content: space-evenly;
  }
`;

export const Divider = styled.div`
  min-width: 6px;
  height: 240px;
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const TextButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  position: relative;
  width: 96px;
  font-size: 2.4rem;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s linear;
  span {
        transition: all 0.3s ease-in-out;
        &:hover {
              color: ${({ theme }) => theme.palette.complementary.main};
        }
  }
  color: ${({ theme, $active }) =>
    $active
      ? theme.palette.complementary.main
      : theme.palette.primary.contrastText};
  @media screen and (min-width: 601px) {
    transform: translateX(${({ $active }) => ($active ? "6px" : "0")});
  }
  @media screen and (max-width: 600px) {
    transform: translateY(${({ $active }) => ($active ? "-6px" : "0")});  
    text-align: center;
    width: auto;
  }
  &::before {
    content: "";
    padding-left: 1px;
    min-width: 6px;
    height: 100%;
    position: absolute;
    left: 130px;
    top: 0;
    background-color: ${({ theme }) => theme.palette.primary.main};
    @media screen and (max-width: 600px) {  
      padding-left: 0;
      transition: width 0.3s ease;
      min-width: 0;
      height: 2px;
      top: 30px;
      left: 0;
      background-color ${({ theme }) => theme.palette.complementary.main};
      ${({ $active }) => $active && "width: 100%"};
    }
  }
  &::after {
    content: "";
    min-width: 6px;
    height: 100%;
    position: absolute;
    left: 136px;
    top: 0;
    transition: all 0.3s linear;
    background-color: ${({ theme, $active }) =>
      $active
        ? theme.palette.complementary.main
        : theme.palette.secondary.main};
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
`;

export const TextWrapper = styled.article`
  margin-left: 40px;
  min-height: 140px;
  line-height: 34px;
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 3px;
  width: 520px;
  font-size: 1.8rem;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  span {
    color: ${({ theme }) => theme.palette.complementary.main};
    white-space: nowrap;
  }
  @media screen and (max-width: 720px) {
    width: 330px;
  }
  @media only screen and (max-width: 600px) {
    margin: auto;
    justify-content: center;
    width: 90%;
    min-height: 300px;
  }
  a {
    text-decoration: none;
    @media screen and (max-width: 600px) {
      text-decoration: underline;
      text-decoration-color: ${({ theme }) => theme.palette.complementary.main};
    }
  }
  & > a {
    text-decoration: none;
    margin: 20px auto 0;
  }
  h2 {
    font-size: 2.5rem;
    @media screen and (max-width: 600px) {
      font-size: 2.2rem;
      text-align: center;
      margin: 10px 0;
    }
  }
  h3 {
    font-size: 1.8rem;
    @media screen and (max-width: 600px) {
      font-size: 1.6rem;
      text-align: center;
      margin: 10px 0;
    }
  }
  li {
    font-size: 1.6rem;
  }
  ul {
    padding-left: 20px;
  }
`;
