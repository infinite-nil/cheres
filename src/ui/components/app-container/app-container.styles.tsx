import styled from "styled-components/native";

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  flex: 1;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg}px;
`;

export { Container };
