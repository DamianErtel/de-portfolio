import * as React from "react";
import { ButtonContainer, Container, StyledSection } from "./main.styled";
import MessageContainer from "./components/MessageContainer";
import BaseButton from "../../../common-styles/buttons.styled";

const Main = () => (
  <StyledSection>
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

export default Main;
