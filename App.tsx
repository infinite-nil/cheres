import { TouchableWithoutFeedback, View } from "react-native";
import { AppContainer, InsightCard, Text } from "@ui/components";
import { useInsights } from "@hooks/use-insights";

export default function App() {
  const { insights, handleInsightClick } = useInsights();

  return (
    <AppContainer>
      <View>
        <Text heading>How you doin’ 🦄</Text>
        <TouchableWithoutFeedback onPress={handleInsightClick}>
          <View>
            {insights.map((insight, index) => (
              <InsightCard
                feeling={insight.feeling}
                title={insight.title}
                level={index}
                key={insight.id}
              />
            ))}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </AppContainer>
  );
}
