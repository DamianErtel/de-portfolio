import styled from "styled-components";

export const SectionStyled = styled.section`
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;
  font-size: 2rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  font-weight: bold;
  @media screen and (max-width: 600px) {
    height: auto;
    margin: 200px 0;
  }
`;
