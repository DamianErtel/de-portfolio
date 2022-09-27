import styled from "styled-components";

export const ButtonContainer = styled.div`
  min-width: 338px;
  margin-top: 110px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    margin-top: 40px;
    min-width: auto;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 120px;
  }
`;

export const StyledMessageContainer = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 360px;
  div {
    font-size: 3.8rem;
    span {
      color: ${({ theme }) => theme.palette.complementary.main};
    }
  }
  div:first-child {
    font-size: 4rem;
  }
  @media screen and (max-width: 600px) {
    min-width: 255px;
    max-width: 255px;
    div {
      font-size: 2rem;
      span {
        color: ${({ theme }) => theme.palette.complementary.main};
      }
    }
    div:first-child {
      font-size: 3rem;
    }
  }
`;
