import { useProduct } from "hooks/products";
import { buildProduct } from "models/builders/products";
import { render, screen } from "test-utils";

import ProductDetailRoute from "./index";

jest.mock("hooks/products");

test("renders with a product", () => {
  useProduct.mockReturnValue(buildProduct());

  render(<ProductDetailRoute />);

  const linkElement = screen.getByText("Handcrafted Fresh Hat", {
    selector: "h1",
  });
  expect(linkElement).toBeInTheDocument();
});

test("not found product", () => {
  useProduct.mockReturnValue(null);

  render(<ProductDetailRoute />);

  const linkElement = screen.getByText("Serviço não encontrado", {
    selector: "h1",
  });
  expect(linkElement).toBeInTheDocument();
});
