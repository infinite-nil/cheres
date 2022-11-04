import React, { FC } from "react";

import { Colors, StyledText } from "./text.style";

type TextProps = {
  children: string;
  color?: Colors;
  heading?: boolean;
};

const Text: FC<TextProps> = ({
  children,
  color = "foregroundPrimary",
  heading = false,
}) => {
  return (
    <StyledText color={color} heading={heading}>
      {children}
    </StyledText>
  );
};

export { Text };
