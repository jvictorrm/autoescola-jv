import { render } from "test-utils";
import GlobalStyle from ".";

test("match snapshot", () => {
  render(<GlobalStyle />);

  expect(document.head).toMatchSnapshot();
});
