import React, { FC, PropsWithChildren } from "react";
import { ViewProps } from "react-native";
import { ThemeProvider } from "styled-components";
import { useCustomFont } from "@hooks/use-custom-font";
import { theme } from "@ui/theme";
import { Container } from "./app-container.styles";
import { StatusBar } from "expo-status-bar";

type AppContainerProps = ViewProps & PropsWithChildren;

const AppContainer: FC<AppContainerProps> = ({ children, ...props }) => {
  const { isFontLoaded, onFontLayout } = useCustomFont();

  if (!isFontLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Container {...props} onLayout={onFontLayout}>
        {children}
      </Container>
    </ThemeProvider>
  );
};

export { AppContainer };
