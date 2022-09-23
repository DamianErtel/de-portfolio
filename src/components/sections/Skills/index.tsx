import React from "react";
import { SectionStyled } from "../../../commonStyles/section.styled";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { techStack } from "../../../utils/content";
import { Container, TitleWrapper } from "./Skills.styled";
import PickMenu from "../../PickMenu";

const Skills = () => {
  const { elementRef } = useIntersectionObserver({ index: 1 });

  return (
    <SectionStyled ref={elementRef} id="skills">
      <Container>
        <TitleWrapper>
          <h1>
            <span>Technologies</span> i&apos;ve used in my projects
          </h1>
        </TitleWrapper>
        <PickMenu content={techStack} />
      </Container>
    </SectionStyled>
  );
};

export default Skills;
