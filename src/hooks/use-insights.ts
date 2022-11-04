import { useMemo, useState } from "react";

type Insight = {
  id: string;
  feeling: string;
  title: string;
};

const ITEMS: Insight[] = [
  {
    id: "1",
    feeling: "🤑",
    title: "1 Expect to make $545.12 in dividends next quarter!",
  },
  {
    id: "2",
    feeling: "🤑",
    title: "2 Expect to make $545.12 in dividends next quarter!",
  },
  {
    id: "3",
    feeling: "🤑",
    title: "3 Expect to make $545.12 in dividends next quarter!",
  },
  {
    id: "4",
    feeling: "🤑",
    title: "4 Expect to make $545.12 in dividends next quarter!",
  },
  {
    id: "5",
    feeling: "🤑",
    title: "5 Expect to make $545.12 in dividends next quarter!",
  },
];

const useInsights = () => {
  const [insights, setInsights] = useState(ITEMS);
  const insightsView = useMemo(() => {
    return insights.slice(0, 3);
  }, [insights]);

  const handleInsightClick = () => {
    setInsights((current) => {
      let [head, ...tail] = current;

      return [...tail, head];
    });
  };

  return {
    insights: insightsView,
    handleInsightClick,
  };
};

export { useInsights };
