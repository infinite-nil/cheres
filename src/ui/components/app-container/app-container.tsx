import React, { FC, PropsWithChildren } from "react";
import { ViewProps } from "react-native";
import { Container } from "./app-container.styles";

type AppContainerProps = ViewProps & PropsWithChildren;

const AppContainer: FC<AppContainerProps> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export { AppContainer };
