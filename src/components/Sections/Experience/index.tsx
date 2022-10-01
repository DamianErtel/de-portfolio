import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { SectionStyled, Container } from "../../../commonStyles";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import PickMenu from "../../PickMenu";
import { IEmployerQuery } from "../../../types";
import AnimatedTitleWrapper from "../../AnimatedTitleWrapper";

const employerQuery = graphql`
  {
    gcms {
      employers {
        id
        name
        value
      }
    }
  }
`;

const Experience = () => {
  const { elementRef } = useIntersectionObserver({ index: 2 });

  const data: IEmployerQuery = useStaticQuery(employerQuery);

  return (
    <SectionStyled ref={elementRef} id="experience">
      <Container>
        <AnimatedTitleWrapper>
          <h1>
            My <span>Experience</span>
          </h1>
        </AnimatedTitleWrapper>
        <PickMenu markdown content={data.gcms.employers} />
      </Container>
    </SectionStyled>
  );
};

export default Experience;
