import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { SectionStyled, TitleWrapper, Container } from "../../../commonStyles";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { ISkillQuery } from "../../../types";
import PickMenu from "../../PickMenu";

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
        <TitleWrapper>
          <h1>
            <span>Technologies</span> i&apos;ve used in my projects
          </h1>
        </TitleWrapper>
        <PickMenu markdown={false} content={data.gcms.skills} />
      </Container>
    </SectionStyled>
  );
};

export default Skills;
