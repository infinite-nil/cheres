import { render } from "../../../utils/test-utils";
import { InsightCard } from "./insight-card";

describe("<InsightCard />", () => {
  it("should render the correct feeling and title", () => {
    const screen = render(<InsightCard feeling="✅" title="Testing title" />);

    screen.getByText(/✅/gi);
    screen.getByText(/Testing title/gi);
  });
});
