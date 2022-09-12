import React from "react";
import { ButtonContainer, Container, StyledSection } from "./Main.styled";
import MessageContainer from "./components/MessageContainer";
import BaseButton from "../../../commonStyles/buttons.styled";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const Main = () => {
  const { elementRef } = useIntersectionObserver({ index: 0 });
  return (
    <StyledSection ref={elementRef} id="home">
      <Container>
        <MessageContainer />
        <ButtonContainer>
          <BaseButton as="a" href="#skills">
            About me
          </BaseButton>
          <BaseButton as="a" href="#contact" variant="secondary">
            Contact me
          </BaseButton>
        </ButtonContainer>
      </Container>
    </StyledSection>
  );
};

export default Main;
