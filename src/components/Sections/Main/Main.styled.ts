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
