import styled from "styled-components/native";

const CardContainer = styled.View`
  border-radius: ${({ theme }) => theme.spacing.lg}px;
  height: 88px;
  overflow: hidden;
  margin-top: ${({ theme }) => theme.spacing.md}px;
  width: 100%;
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