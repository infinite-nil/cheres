import React from "react";
import { AppContainer, Text, InsightsStack } from "@ui/components";
import { useInsights } from "@hooks/use-insights";

export default function App() {
  const { insights, handleInsightCycle } = useInsights();

  return (
    <AppContainer>
      <Text heading>How you doin’ 🦄</Text>
      <InsightsStack insights={insights} onInsightPress={handleInsightCycle} />
    </AppContainer>
  );
}
