import styled from "styled-components";
import { motion } from "framer-motion";

export const BaseButton = styled.button<{ variant?: string }>`
  width: 140px;
  height: 40px;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
  ${({ variant, theme }) => {
    switch (variant) {
      case "secondary":
        return `
                background: none;
                border: 2px solid ${theme.palette.secondary.main}; 
                color: ${theme.palette.secondary.main};
                &:hover {
                    background-color: ${theme.palette.secondary.main};
                    color: ${theme.palette.secondary.contrastText};
                };
                `;
      default:
        return `
                background: none;
                border: 2px solid ${theme.palette.complementary.main};
                color: ${theme.palette.complementary.main};
                &:hover {
                    background-color: ${theme.palette.complementary.main};
                    color: ${theme.palette.complementary.contrastText};
                }
            `;
    }
  }};
`;

export const SectionStyled = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  font-weight: bold;
  @media screen and (max-width: 600px) {
    margin-bottom: 10vh;
  }
`;

export const TitleWrapper = styled(motion.div)`
  width: 420px;
  text-align: center;
  position: relative;
  top: 0;
  left: 0;
  h1 {
    font-weight: 400;
    font-size: 4rem;
    display: inline;
    span {
      color: ${({ theme }) => theme.palette.complementary.main};
    }
  }
  h2 {
    font-size: 3rem;
    font-weight: 400;
  }
  margin-bottom: 30px;
  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  height: 100%;
`;

export const StyledMessageContainer = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 360px;
  div {
    font-size: 3.8rem;
    span {
      color: ${({ theme }) => theme.palette.complementary.main};
    }
  }
  div:first-child {
    font-size: 4rem;
  }
  @media screen and (max-width: 600px) {
    min-width: 255px;
    max-width: 255px;
    div {
      font-size: 2rem;
      span {
        color: ${({ theme }) => theme.palette.complementary.main};
      }
    }
    div:first-child {
      font-size: 3rem;
    }
  }
`;
