import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

const RoundGradient = styled(LinearGradient)`
  border-radius: ${({ theme }) => theme.spacing.lg}px;
  bottom: -20px;
  left: -20px;
  overflow: hidden;
  position: absolute;
  right: -20px;
  top: -20px;
  transform: rotate(6deg);
`;

const Background = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: ${({ theme }) => theme.spacing.lg}px;
  bottom: 2px;
  left: 2px;
  overflow: hidden;
  position: absolute;
  right: 2px;
  top: 2px;
`;

const Gradient = styled(LinearGradient)`
  border-radius: ${({ theme }) => theme.spacing.lg}px;
  bottom: 2px;
  flex-direction: row;
  left: 2px;
  overflow: hidden;
  position: absolute;
  right: 2px;
  top: 2px;
`;

export { Background, Gradient, RoundGradient };
