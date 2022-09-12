import * as React from "react";
import { StyledMessageContainer, StyledTypeAnimation } from "../Main.styled";

const MessageContainer = () => (
  <StyledMessageContainer>
    <div style={{ display: "flex" }}>
      <StyledTypeAnimation
        sequence={["", 200, "Hello, I'm"]}
        cursor={false}
        $main
        $color={false}
      />
      &nbsp;
      <StyledTypeAnimation
        sequence={["", 800, "Damian"]}
        cursor={false}
        $main
        $color
      />
    </div>
    <div style={{ display: "flex" }}>
      <StyledTypeAnimation
        sequence={["", 1500, "Frontend", 300, "Backend", 300, "Fullstack"]}
        wrapper="div"
        cursor={false}
        $main={false}
        $color={false}
      />
      &nbsp;
      <StyledTypeAnimation
        sequence={["", 4900, "Web Developer"]}
        cursor={false}
        $main={false}
        $color
      />
    </div>
  </StyledMessageContainer>
);

export default MessageContainer;
