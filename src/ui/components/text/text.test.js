import { render } from "../../../utils/test-utils";
import { Text } from "./text";

describe("<Text />", () => {
  it("should return the correct text", () => {
    const screen = render(<Text>testing</Text>);

    screen.getByText(/testing/i);
  });

  it("should return the bold text", () => {
    const screen = render(<Text heading>testing</Text>);
    const style = screen.toJSON().props.style[0];

    expect(style.fontFamily).toBe("Inter-Bold");
  });
});
