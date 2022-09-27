import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { SectionStyled, TitleWrapper, Container } from "../../../commonStyles";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import PickMenu from "../../PickMenu";
import { IProjectQuery } from "../../../types";

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
        <TitleWrapper>
          <h1>
            My <span>projects</span>
          </h1>
        </TitleWrapper>
        <PickMenu markdown content={data.gcms.projects} />
      </Container>
    </SectionStyled>
  );
};

export default Projects;
