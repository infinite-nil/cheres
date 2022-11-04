import React, { PropsWithChildren } from "react";
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

const InsightCard = ({ feeling, title, level = 1 }: CardProps) => {
  return (
    <CardContainer level={level}>
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
