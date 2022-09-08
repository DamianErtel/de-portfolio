import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  width: 420px;
  text-align: center;
  h1 {
    font-weight: 400;
    font-size: 4rem;
    display: inline;
    span {
      color: ${({ theme }) => theme.palette.complementary.main};
    }
  }
  margin-bottom: 30px;
  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 522px;
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
    width: 300px;
    height: auto;
  }
`;

export const TextButton = styled.button<{ $active: boolean }>`
  background: none;
  border: none;
  position: relative;
  font-size: 2.4rem;
  cursor: pointer;
  text-align: left;
  color: ${({ theme, $active }) =>
    $active
      ? theme.palette.complementary.main
      : theme.palette.primary.contrastText};
  @media screen and (min-width: 601px) {
    transform: translateX(${({ $active }) => ($active ? "6px" : "0")});
  }
  @media screen and (max-width: 600px) {
    transform: translateY(${({ $active }) => ($active ? "-6px" : "0")});
  }
  transition: all 0.3s linear;
  span {
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.palette.complementary.main};
    }
  }
  &::before {
    content: "";
    width: 6px;
    height: 100%;
    position: absolute;
    left: 130px;
    top: 0;
    background-color: ${({ theme }) => theme.palette.primary.main};
    @media screen and (max-width: 600px) {
      display: none;
    }
  }
  &::after {
    content: "";
    width: 6px;
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
  width: 340px;
  font-size: 1.8rem;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  span:nth-child(odd) {
    color: ${({ theme }) => theme.palette.complementary.main};
  }
`;

export const Divider = styled.div`
  width: 6px;
  height: 240px;
  background-color: ${({ theme }) => theme.palette.primary.contrastText};
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
