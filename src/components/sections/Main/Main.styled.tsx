import styled from "styled-components";
import { TypeAnimation } from "react-type-animation";
import SectionStyled from "../../../commonStyles/section.styled";

export const StyledSection = styled(SectionStyled)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  min-width: 338px;
  margin-top: 110px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    margin-top: 40px;
    min-width: auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 120px;
  }
`;

export const StyledMessageContainer = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 360px;
  font-size: 4rem;
  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  @media screen and (max-width: 600px) {
    min-width: 255px;
    max-width: 255px;
  }
`;

export const StyledTypeAnimation = styled(TypeAnimation)<{
  $main: boolean;
  $color: boolean;
}>`
  font-size: ${({ $main }) => ($main ? "4rem" : "3rem")};
  color: ${({ $color, theme }) =>
    $color ? theme.palette.secondary.main : theme.palette.primary.contrastText};
  @media screen and (max-width: 600px) {
    font-size: ${({ $main }) => ($main ? "3rem" : "2rem")};
  }
`;
