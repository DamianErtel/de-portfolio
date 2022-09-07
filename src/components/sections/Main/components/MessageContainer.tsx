import * as React from "react";
import { StyledMessageContainer, StyledTypeAnimation } from "../Main.styled";

const MessageContainer = () => (
  <StyledMessageContainer>
    <div style={{ display: "flex" }}>
      <StyledTypeAnimation
        sequence={["", 200, "Hello, i'm"]}
        cursor={false}
        $main
      />
      &nbsp;
      <StyledTypeAnimation
        sequence={["", 800, "Damian"]}
        cursor={false}
        style={{ color: "#FFCD00" }}
        $main
      />
    </div>
    <div style={{ display: "flex" }}>
      <StyledTypeAnimation
        sequence={["", 1500, "Frontend", 500, "Backend", 500, "Fullstack"]}
        wrapper="div"
        cursor={false}
        $main={false}
      />
      &nbsp;
      <StyledTypeAnimation
        sequence={["", 5500, "Web Developer"]}
        style={{ color: "#FFCD00" }}
        cursor={false}
        $main={false}
      />
    </div>
  </StyledMessageContainer>
);

export default MessageContainer;
