import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { SectionStyled, Container } from "../../../commonStyles";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { ISkillQuery } from "../../../types";
import PickMenu from "../../PickMenu";
import AnimatedTitleWrapper from "../../AnimatedTitleWrapper";

const skillQuery = graphql`
  {
    gcms {
      skills {
        id
        name
        value
      }
    }
  }
`;

const Skills = () => {
  const { elementRef } = useIntersectionObserver({ index: 1 });

  const data: ISkillQuery = useStaticQuery(skillQuery);

  return (
    <SectionStyled ref={elementRef} id="skills">
      <Container>
        <AnimatedTitleWrapper>
          <h1>
            <span>Technologies</span> i&apos;ve used in my projects
          </h1>
        </AnimatedTitleWrapper>
        <PickMenu markdown={false} content={data.gcms.skills} />
      </Container>
    </SectionStyled>
  );
};

export default Skills;
