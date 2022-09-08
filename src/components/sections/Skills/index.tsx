import React, { useState } from "react";
import { StyledSection } from "../Main/Main.styled";
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

const stackArray = [frontendStack, backendStack, otherStack];

const Skills = () => {
  const [currentStack, setCurrentStack] = useState(frontendStack);
  return (
    <StyledSection id="skills">
      <Container>
        <TitleWrapper>
          <h1>
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
