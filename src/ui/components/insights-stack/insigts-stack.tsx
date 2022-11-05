import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { Insight } from "@utils/data";
import { InsightCard } from "../insight-card/insight-card";

type InsightsStackProps = {
  insights: Insight[];
  onInsightPress: () => void;
};

const InsightsStack = ({ insights, onInsightPress }: InsightsStackProps) => {
  return (
    <TouchableWithoutFeedback onPress={onInsightPress}>
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
  );
};

export { InsightsStack };
