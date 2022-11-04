import styled, { DefaultTheme } from "styled-components/native";
import { normalize } from "@ui/theme/normalize";

export type Colors = keyof DefaultTheme["colors"];

type StyledTextProps = {
  color: keyof DefaultTheme["colors"];
  heading?: boolean;
};

const StyledText = styled.Text<StyledTextProps>`
  color: ${({ color, theme }) => theme.colors[color]};
  font-family: ${({ theme, heading }) =>
    heading ? theme.fontFamily.heading : theme.fontFamily.body};
  font-size: ${({ theme, heading }) =>
    normalize(heading ? theme.fontSize.heading : theme.fontSize.body)}px;
  font-weight: ${({ theme, heading }) =>
    heading ? theme.fontWeight.heading : theme.fontWeight.body};
`;

export { StyledText };
