import React from "react";
import {
  SectionStyled,
  Container,
  StyledMessageContainer,
  BaseButton,
} from "../../../commonStyles";
import {
  ContactButtonsWrapper,
  ContactMessageContainer,
} from "./Contact.styled";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

const Contact = () => {
  const { elementRef } = useIntersectionObserver({ index: 4 });
  return (
    <SectionStyled ref={elementRef} id="contact">
      <Container>
        <ContactMessageContainer>
          <div>
            <p>
              I&apos;m open for new <span>Job opportunities</span> and{" "}
              <span>Commissions</span>
            </p>
          </div>
          <div>
            <p>
              You can <span>Contact me</span> via
            </p>
          </div>
        </ContactMessageContainer>
        <br />
        <ContactButtonsWrapper>
          <BaseButton as="a" href="mailto:damian.ertel5@gmail.com">
            E-mail
          </BaseButton>
          <span>Or</span>
          <BaseButton
            variant="secondary"
            as="a"
            href="https://www.linkedin.com/in/damian-ertel-88002922b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </BaseButton>
        </ContactButtonsWrapper>
      </Container>
    </SectionStyled>
  );
};

export default Contact;
