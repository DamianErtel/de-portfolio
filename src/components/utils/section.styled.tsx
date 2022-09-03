import React from "react";
import styled from "styled-components";

const SectionStyled = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: center;
  font-size: 2rem;
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  font-weight: bold;
`;

export default SectionStyled;
