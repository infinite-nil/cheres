import { FC, PropsWithChildren, ReactElement } from "react";
import {
  render as nativeRender,
  RenderOptions,
} from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "../ui/theme";

const Provider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const render = (component: ReactElement, options: RenderOptions) => {
  return nativeRender(component, { wrapper: Provider });
};

export { render };
export * from "@testing-library/dom";
