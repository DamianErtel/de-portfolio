import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { SectionStyled, Container } from "../../../commonStyles";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import PickMenu from "../../PickMenu";
import { IProjectQuery } from "../../../types";
import AnimatedTitleWrapper from "../../AnimatedTitleWrapper";

const projectQuery = graphql`
  {
    gcms {
      projects {
        id
        name
        value
      }
    }
  }
`;

const Projects = () => {
  const { elementRef } = useIntersectionObserver({ index: 3 });

  const data: IProjectQuery = useStaticQuery(projectQuery);

  return (
    <SectionStyled ref={elementRef} id="projects">
      <Container>
        <AnimatedTitleWrapper>
          <h1>
            My <span>projects</span>
          </h1>
        </AnimatedTitleWrapper>
        <PickMenu markdown content={data.gcms.projects} />
      </Container>
    </SectionStyled>
  );
};

export default Projects;
