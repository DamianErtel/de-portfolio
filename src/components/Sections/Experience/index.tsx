import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { SectionStyled, TitleWrapper, Container } from "../../../commonStyles";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import PickMenu from "../../PickMenu";
import { IEmployerQuery } from "../../../types";

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
        <TitleWrapper>
          <h1>
            My <span>Experience</span>
          </h1>
        </TitleWrapper>
        <PickMenu markdown content={data.gcms.employers} />
      </Container>
    </SectionStyled>
  );
};

export default Experience;
