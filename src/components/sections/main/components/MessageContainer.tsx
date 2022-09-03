import { TypeAnimation } from "react-type-animation";
import * as React from "react";
import { StyledMessageContainer } from "../main.styled";

const MessageContainer = () => (
  <StyledMessageContainer>
    <div style={{ display: "flex" }}>
      <TypeAnimation
        sequence={["", 1000, "Hello, i'm"]}
        cursor={false}
        style={{ fontSize: "4rem" }}
      />
      &nbsp;
      <TypeAnimation
        sequence={["", 2000, "Damian"]}
        cursor={false}
        style={{ fontSize: "4rem", color: "#FFCD00" }}
      />
    </div>
    <div style={{ display: "flex" }}>
      <TypeAnimation
        sequence={["", 3000, "Frontend", 500, "Backend", 500, "Fullstack"]}
        wrapper="div"
        cursor={false}
        style={{ fontSize: "3rem" }}
      />
      &nbsp;
      <TypeAnimation
        sequence={["", 7000, "Web Developer"]}
        style={{ fontSize: "3rem", color: "#FFCD00" }}
        cursor={false}
      />
    </div>
  </StyledMessageContainer>
);

export default MessageContainer;
