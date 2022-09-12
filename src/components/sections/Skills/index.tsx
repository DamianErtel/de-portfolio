import React, { useState, useRef } from "react";
import { StyledSection } from "../Main/Main.styled";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import {
  frontendStack,
  backendStack,
  otherStack,
} from "../../../utils/content";
import {
  Container,
  MenuWrapper,
  ButtonsWrapper,
  TextWrapper,
  TextButton,
  TitleWrapper,
  Divider,
} from "./Skills.styled";
import useChangeSectionIndex from "../../../hooks/useChangeSectionIndex";

const stackArray = [frontendStack, backendStack, otherStack];

const Skills = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  useChangeSectionIndex({ isVisible, index: 1 });

  const [currentStack, setCurrentStack] = useState(frontendStack);
  return (
    <StyledSection id="skills">
      <Container>
        <TitleWrapper>
          <h1 ref={ref}>
            <span>Technologies</span> i&apos;ve used in my projects
          </h1>
        </TitleWrapper>
        <MenuWrapper>
          <ButtonsWrapper>
            {stackArray.map((stack) => (
              <TextButton
                $active={currentStack.name === stack.name}
                type="button"
                key={`stack-button-${stack.name}`}
                onClick={() => setCurrentStack(stack)}
              >
                <span>{stack.name}</span>
              </TextButton>
            ))}
          </ButtonsWrapper>
          <Divider />
          <TextWrapper>
            {currentStack.value.map((text) => (
              <span key={text}>{text},&nbsp;</span>
            ))}
          </TextWrapper>
        </MenuWrapper>
      </Container>
    </StyledSection>
  );
};

export default Skills;
