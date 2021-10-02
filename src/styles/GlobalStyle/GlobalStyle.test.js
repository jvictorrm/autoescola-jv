import { render } from "@testing-library/react";
import GlobalStyle from ".";

test("match snapshot", () => {
  render(<GlobalStyle />);

  expect(document.head).toMatchSnapshot();
});
