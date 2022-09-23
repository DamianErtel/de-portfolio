import React from "react";
import { Container } from "../Main/Main.styled";
import { SectionStyled } from "../../../commonStyles/section.styled";
import { employers } from "../../../utils/content";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { TitleWrapper } from "../Skills/Skills.styled";
import PickMenu from "../../PickMenu";

const Experience = () => {
  const { elementRef } = useIntersectionObserver({ index: 2 });

  return (
    <SectionStyled ref={elementRef} id="experience">
      <Container>
        <TitleWrapper>
          <h1>
            My <span>Experience</span>
          </h1>
        </TitleWrapper>
        <PickMenu content={employers} />
      </Container>
    </SectionStyled>
  );
};

export default Experience;
