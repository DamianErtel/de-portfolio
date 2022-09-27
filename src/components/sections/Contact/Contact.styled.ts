import styled from "styled-components";

export const ContactTextWrapper = styled.article`
  font-size: 2rem;
  text-align: center;
  max-width: 600px;
  line-height: 30px;
  letter-spacing: 1px;
  @media screen and (max-width: 600px) {
    margin: 0 auto;
  }
  a {
    color: ${({ theme }) => theme.palette.complementary.main};
    text-decoration: underline;
  }
`;
