import styled from "styled-components";
import { StyledMessageContainer } from "../../../commonStyles";

export const ContactButtonsWrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 400px;
  @media screen and (max-width: 600px) {
    width: auto;
    flex-direction: column;
    height: 150px;
  }
`;

export const ContactMessageContainer = styled(StyledMessageContainer)`
  & > div {
    font-size: 2.6rem;
    text-align: center;
  }

  div:first-child {
    font-size: 2.8rem;
    margin-bottom: 20px;
  }
`;
