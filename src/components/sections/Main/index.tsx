import * as React from "react";
import { ButtonContainer, Container, StyledSection } from "./Main.styled";
import MessageContainer from "./components/MessageContainer";
import BaseButton from "../../../commonStyles/buttons.styled";
import useChangeLocationHashOnView from "../../../hooks/useChangeLocationHashOnView";

const Main = () => {
  const ref = useChangeLocationHashOnView("home");

  return (
    <StyledSection id="home">
      <Container>
        <MessageContainer />
        <ButtonContainer>
          <BaseButton ref={ref} as="a" href="#skills">
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
