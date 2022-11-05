import React, { PropsWithChildren } from "react";
import { FadeInDown, FadeOutUp } from "react-native-reanimated";
import { Text } from "../text/text";
import { LightEffect } from "./components/light-effect/light-effect";
import {
  CardContainer,
  FeelingContainer,
  TextContainer,
  TitleContainer,
} from "./insight-card.styles";

type CardProps = PropsWithChildren & {
  feeling: string;
  title: string;
  level: number;
};

const InsightCard = ({ feeling, title, level = 0 }: CardProps) => {
  const enteringAnimation =
    level !== 0 ? FadeInDown.delay(100).duration(140) : undefined;

  return (
    <CardContainer
      level={level}
      entering={enteringAnimation}
      exiting={FadeOutUp.duration(300)}
    >
      <LightEffect level={level} />
      <TextContainer>
        <FeelingContainer>
          <Text>{feeling}</Text>
        </FeelingContainer>
        <TitleContainer>
          <Text>{title}</Text>
        </TitleContainer>
      </TextContainer>
    </CardContainer>
  );
};

export { InsightCard };
