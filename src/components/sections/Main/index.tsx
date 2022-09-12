import React, { useRef } from "react";
import { ButtonContainer, Container, StyledSection } from "./Main.styled";
import MessageContainer from "./components/MessageContainer";
import BaseButton from "../../../commonStyles/buttons.styled";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import useChangeSectionIndex from "../../../hooks/useChangeSectionIndex";

const Main = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  useChangeSectionIndex({ isVisible, index: 0 });
  return (
    <StyledSection ref={ref} id="home">
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
