import * as React from "react";
import { ButtonContainer, Container, StyledSection } from "./main.styled";
import MessageContainer from "./components/MessageContainer";
import { BaseButton } from "../../../common-styles/buttons.styled";

const Main = () => {
  return (
    <StyledSection>
      <Container>
        <MessageContainer />
        <ButtonContainer>
          <BaseButton type="button">About me</BaseButton>
          <BaseButton type="button" variant="secondary">
            Contact me
          </BaseButton>
        </ButtonContainer>
      </Container>
    </StyledSection>
  );
};

export default Main;
