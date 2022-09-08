import styled from "styled-components";

const BaseButton = styled.button<{ variant?: string }>`
  width: 140px;
  height: 40px;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    transform: scale(1.1);
  }
  ${({ variant, theme }) => {
    switch (variant) {
      case "secondary":
        return `
                background: none;
                border: 2px solid ${theme.palette.secondary.main}; 
                color: ${theme.palette.secondary.main};
                &:hover {
                    background-color: ${theme.palette.secondary.main};
                    color: ${theme.palette.secondary.contrastText};
                };
                `;
      default:
        return `
                background: none;
                border: 2px solid ${theme.palette.complementary.main};
                color: ${theme.palette.complementary.main};
                &:hover {
                    background-color: ${theme.palette.complementary.main};
                    color: ${theme.palette.complementary.contrastText};
                }
            `;
    }
  }};
`;

export default BaseButton;
