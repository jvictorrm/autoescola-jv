import { render, screen } from "test-utils";
import About from ".";

beforeEach(() => {
  jest.resetAllMocks();
});

test("renders About page", () => {
  render(<About />);
  const linkElement = screen.getByText("Conheça nossos professores");
  expect(linkElement).toBeInTheDocument();
});
