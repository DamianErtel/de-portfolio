import * as React from "react";
import { StyledMessageContainer } from "../Main.styled";

const MessageContainer = () => (
  <StyledMessageContainer>
    <div>
      <p>
        Hello, I&apos;m <span>Damian</span>
      </p>
    </div>
    <div>
      <p>
        Fullstack <span>Web Developer</span>
      </p>
    </div>
  </StyledMessageContainer>
);

export default MessageContainer;
