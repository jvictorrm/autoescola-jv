import { render } from "test-utils";
import Feature from ".";

test("renders the title", () => {
  const { getByText } = render(<Feature title="My Title"></Feature>);
  expect(getByText("My Title")).toBeInTheDocument();
});

test("renders the children", () => {
  const { getByText } = render(<Feature>My children</Feature>);
  expect(getByText("My children")).toBeInTheDocument();
});
