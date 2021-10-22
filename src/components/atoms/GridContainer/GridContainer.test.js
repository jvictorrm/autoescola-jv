import { render } from "test-utils";
import GridContainer from ".";

test("match snapshot with no params", () => {
  const { asFragment } = render(<GridContainer>My children</GridContainer>);
  expect(asFragment()).toMatchSnapshot();
});

test("match snapshot with params", () => {
  const { asFragment } = render(
    <GridContainer sm={2} md={3} lg={4} xl={5}>
      My children
    </GridContainer>
  );
  expect(asFragment()).toMatchSnapshot();
});
