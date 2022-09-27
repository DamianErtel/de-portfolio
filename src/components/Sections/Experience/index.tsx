import React from "react";
import { SectionStyled, TitleWrapper, Container } from "../../../commonStyles";
import { employers } from "../../../utils/content";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
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
