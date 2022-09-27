import React from "react";
import { SectionStyled, TitleWrapper, Container } from "../../../commonStyles";
import { projects } from "../../../utils/content";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import PickMenu from "../../PickMenu";

const Projects = () => {
  const { elementRef } = useIntersectionObserver({ index: 3 });

  return (
    <SectionStyled ref={elementRef} id="projects">
      <Container>
        <TitleWrapper>
          <h1>
            My <span>projects</span>
          </h1>
        </TitleWrapper>
        <PickMenu content={projects} />
      </Container>
    </SectionStyled>
  );
};

export default Projects;
