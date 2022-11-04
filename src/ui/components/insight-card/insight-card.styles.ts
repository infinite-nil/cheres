import styled from "styled-components/native";
import { getFraction, getZIndex } from "@utils/styles";

export type LevelProps = {
  level: number;
};

const CardContainer = styled.View<LevelProps>`
  border-radius: ${({ theme }) => theme.spacing.lg}px;
  height: 88px;
  overflow: hidden;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  position: absolute;
  top: ${({ level }) => level * 8}px;
  transform: scaleX(${({ level }) => getFraction(level)});
  width: 100%;
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
