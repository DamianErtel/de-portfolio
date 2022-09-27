import React from "react";
import { ButtonContainer } from "./Main.styled";
import { SectionStyled, BaseButton, Container } from "../../../commonStyles";
import MessageContainer from "../../MessageContainer";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const Main = () => {
  const { elementRef } = useIntersectionObserver({ index: 0 });
  return (
    <SectionStyled ref={elementRef} id="home">
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
    </SectionStyled>
  );
};

export default Main;
