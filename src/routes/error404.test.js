import { render, screen } from "test-utils";
import Error404 from "./error404";

test("render with success", () => {
  render(<Error404 />);

  const linkElement = screen.getByText("Página não encontrada");

  expect(linkElement).toBeInTheDocument();
});
