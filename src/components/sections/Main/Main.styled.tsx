import styled from "styled-components";
import SectionStyled from "../../utils/section.styled";

export const StyledSection = styled(SectionStyled)`
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const StyledMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 360px;
  font-size: 4rem;
`;
