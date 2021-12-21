import { render, screen } from "test-utils";
import ProductDetail from ".";

test("renders Product Detail page", () => {
  render(<ProductDetail />);
  const linkElement = screen.getByText("Certidão de Nascimento ou casamento");
  expect(linkElement).toBeInTheDocument();
});
