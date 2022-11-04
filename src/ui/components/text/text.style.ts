import styled, { DefaultTheme } from "styled-components/native";

export type Colors = keyof DefaultTheme["colors"];

type StyledTextProps = {
  color: keyof DefaultTheme["colors"];
  heading?: boolean;
};

const StyledText = styled.Text<StyledTextProps>`
  color: ${({ color, theme }) => theme.colors[color]};
  font-family: "Inter";
  font-size: ${({ theme, heading }) =>
    heading ? theme.fontSize.heading : theme.fontSize.body};
  font-weight: ${({ theme, heading }) =>
    heading ? theme.fontWeight.heading : theme.fontWeight.body};
`;

export { StyledText };
