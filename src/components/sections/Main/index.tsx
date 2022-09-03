import * as React from "react";
import { StyledSection } from "./Main.styled";
import MessageContainer from "./components/MessageContainer";

const Main = () => {
  return (
    <StyledSection>
      <MessageContainer />
    </StyledSection>
  );
};

export default Main;
