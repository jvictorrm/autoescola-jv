import { render, screen } from "test-utils";
import Home from ".";

test("renders Home page", () => {
  render(<Home />);
  const linkElement = screen.getByText(/matricule-se agora/i);
  expect(linkElement).toBeInTheDocument();
});
