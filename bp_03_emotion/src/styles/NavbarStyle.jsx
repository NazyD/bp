import styled from "@emotion/styled";

const ThemeToggleButton = styled.button`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
  }
`;

export default ThemeToggleButton;
