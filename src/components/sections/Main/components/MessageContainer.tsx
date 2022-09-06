import * as React from "react";
import { StyledMessageContainer, StyledTypeAnimation } from "../Main.styled";

const MessageContainer = () => (
  <StyledMessageContainer>
    <div style={{ display: "flex" }}>
      <span>Hello, i&apos;m&nbsp;</span>
      <span>Damian</span>
      &nbsp;
    </div>
    <div style={{ display: "flex" }}>
      <StyledTypeAnimation
        sequence={["", 200, "Frontend", 500, "Backend", 500, "Fullstack"]}
        wrapper="div"
        cursor={false}
        $main={false}
      />
      &nbsp;
      <StyledTypeAnimation
        sequence={["", 3800, "Web Developer"]}
        style={{ color: "#FFCD00" }}
        cursor={false}
        $main={false}
      />
    </div>
  </StyledMessageContainer>
);

export default MessageContainer;
