import React from "react";
import { SectionStyled, TitleWrapper, Container } from "../../../commonStyles";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import { ContactTextWrapper } from "./Contact.styled";

const Contact = () => {
  const { elementRef } = useIntersectionObserver({ index: 4 });
  return (
    <SectionStyled ref={elementRef} id="contact">
      <Container>
        <TitleWrapper>
          <h1>
            <span>Contact</span>
          </h1>
        </TitleWrapper>
        <ContactTextWrapper>
          I’m open for new job offers and commissions.
          <br /> You can contact me via&nbsp;
          <a href="mailto:damian.ertel@gmail.com">Email</a> or&nbsp;
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/damian-ertel-88002922b/"
            target="_blank"
          >
            LinkedIn
          </a>
          &nbsp;profile.
        </ContactTextWrapper>
      </Container>
    </SectionStyled>
  );
};

export default Contact;
