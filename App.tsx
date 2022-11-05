import React from "react";
import { View } from "react-native";
import { AppContainer, Text, InsightsStack } from "@ui/components";
import { useInsights } from "@hooks/use-insights";

export default function App() {
  const { insights, handleInsightCycle } = useInsights();

  return (
    <AppContainer>
      <View>
        <Text heading>How you doin’ 🦄</Text>
        <InsightsStack
          insights={insights}
          onInsightPress={handleInsightCycle}
        />
      </View>
    </AppContainer>
  );
}
