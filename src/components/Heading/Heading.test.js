import { render } from "@testing-library/react";
import Heading from ".";

test("match snapshot", () => {
  const { asFragment } = render(<Heading>Title</Heading>);

  expect(asFragment()).toMatchSnapshot();
});
