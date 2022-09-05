import styled from "styled-components";

const BaseButton = styled.button<{ variant?: string }>`
  width: 140px;
  height: 40px;
  font-size: 2rem;
  border: none;
  cursor: pointer;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 0.2s ease-in-out;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ variant, theme }) => {
    switch (variant) {
      case "secondary":
        return `
                background-color: ${theme.palette.secondary.main};
                color: ${theme.palette.primary.main};
                &:hover {
                    background-color: ${theme.palette.secondary.light};
                };
                `;
      default:
        return `
                background-color: ${theme.palette.primary.dark};
                color: ${theme.palette.primary.contrastText};
                &:hover {
                    background-color: ${theme.palette.primary.light};
                }
            `;
    }
  }};
`;

export default BaseButton;
