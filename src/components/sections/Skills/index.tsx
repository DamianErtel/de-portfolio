import React, { useState } from "react";
import { SectionStyled } from "../../../commonStyles/section.styled";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { IContent, techStack } from "../../../utils/content";
import { Container, TitleWrapper } from "./Skills.styled";
import PickMenu from "../../PickMenu";

const stackArray = techStack;

const Skills = () => {
  const { elementRef } = useIntersectionObserver({ index: 1 });

  const [currentStack, setCurrentStack] = useState<IContent>(techStack[0]);
  return (
    <SectionStyled ref={elementRef} id="skills">
      <Container>
        <TitleWrapper>
          <h1>
            <span>Technologies</span> i&apos;ve used in my projects
          </h1>
        </TitleWrapper>
        <PickMenu
          contentArray={stackArray}
          currentContent={currentStack}
          setCurrentContent={setCurrentStack}
        >
          {currentStack.value.map((text) => (
            <span key={text}>{text},&nbsp;</span>
          ))}
        </PickMenu>
      </Container>
    </SectionStyled>
  );
};

export default Skills;
