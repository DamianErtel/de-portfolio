import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  height: 100%;
`;

export const TitleWrapper = styled.div`
  width: 420px;
  text-align: center;
  h1 {
    font-weight: 400;
    font-size: 4rem;
    display: inline;
    span {
      color: ${({ theme }) => theme.palette.complementary.main};
    }
  }
  h2 {
    font-size: 3rem;
    font-weight: 400;
  }
  margin-bottom: 30px;
  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;
