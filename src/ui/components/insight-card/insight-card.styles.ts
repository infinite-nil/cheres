import styled from "styled-components/native";
import Animated from "react-native-reanimated";
import { getZIndex, getCardSize, getCardPosition } from "@utils/styles";

export type LevelProps = {
  level: number;
};

const CardContainer = styled(Animated.View)<LevelProps>`
  align-self: center;
  border-radius: ${({ theme }) => theme.spacing.lg}px;
  height: 88px;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  overflow: hidden;
  position: absolute;
  top: ${({ level }) => getCardPosition(level)}px;
  width: ${({ level }) => getCardSize(level)};
  z-index: ${({ level }) => getZIndex(level)};
`;

const TextContainer = styled.View`
  flex-direction: row;
  padding: ${({ theme }) => theme.spacing.lg}px;
`;

const FeelingContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const TitleContainer = styled.View`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing.lg}px;
`;

export { CardContainer, TextContainer, FeelingContainer, TitleContainer };
