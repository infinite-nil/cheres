import { View } from "react-native";
import { AppContainer, InsightCard, Text } from "@ui/components";

export default function App() {
  return (
    <AppContainer>
      <View>
        <Text heading>How you doin’ 🦄</Text>
        <InsightCard
          feeling="🤑"
          title="Expect to make $545.12 in dividends next quarter!"
        />
      </View>
    </AppContainer>
  );
}
