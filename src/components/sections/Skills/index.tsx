import React from "react";
import { Container, StyledSection } from "../Main/Main.styled";
import useChangeLocationHashOnView from "../../../hooks/useChangeLocationHashOnView";

const Skills = () => {
  const ref = useChangeLocationHashOnView("skills");

  return (
    <StyledSection id="skills">
      <Container>
        <p ref={ref}>SKILLS</p>
      </Container>
    </StyledSection>
  );
};

export default Skills;
