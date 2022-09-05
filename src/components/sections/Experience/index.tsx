import React from "react";
import { Container, StyledSection } from "../Main/Main.styled";
import useChangeLocationHashOnView from "../../../hooks/useChangeLocationHashOnView";

const Experience = () => {
  const ref = useChangeLocationHashOnView("experience");

  return (
    <StyledSection id="experience">
      <Container>
        <p ref={ref}>EXPERIENCE</p>
      </Container>
    </StyledSection>
  );
};

export default Experience;
