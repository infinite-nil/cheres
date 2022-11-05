import { fireEvent } from "@testing-library/react-native";
import { render } from "../../../utils/test-utils";
import { InsightsStack } from "./insights-stack";

const mock = [
  {
    id: "1",
    feeling: "1",
    title: "item 1",
  },
  {
    id: "2",
    feeling: "2",
    title: "item 2",
  },
  {
    id: "3",
    feeling: "3",
    title: "item 3",
  },
];

describe("<InsightsStack />", () => {
  it("should render the correct list of insights", () => {
    const mockFn = jest.fn();
    const screen = render(
      <InsightsStack insights={mock} onInsightPress={mockFn} />
    );

    const items = screen.getAllByText(/item/gi);

    expect(items.length).toBe(3);
  });

  it("should fire press event", () => {
    const mockFn = jest.fn();
    const screen = render(
      <InsightsStack insights={mock} onInsightPress={mockFn} />
    );

    fireEvent.press(screen.getByRole("button"));

    expect(mockFn).toBeCalled();
  });
});
