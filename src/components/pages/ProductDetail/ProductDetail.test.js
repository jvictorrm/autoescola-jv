import { buildProduct } from "models/builders/products";
import { render, screen } from "test-utils";
import ProductDetail from ".";

test("renders Product Detail page", () => {
  render(<ProductDetail product={buildProduct()} />);
  const linkElement = screen.getByText("Handcrafted Fresh Hat", {
    selector: "h1",
  });
  expect(linkElement).toBeInTheDocument();
});
