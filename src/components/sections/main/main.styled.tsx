import styled from "styled-components";
import { SectionStyled } from "../../../common-styles/section.styled";

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
`;

export const StyledMessageContainer = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 360px;
  font-size: 4rem;
`;
