import { useProduct, useProducts } from "./products";

describe("useProduct()", () => {
  test("returns a product", () => {
    const slug = "primeira-habilitacao-moto";

    const product = useProduct({ slug });

    expect(product.title).toEqual("1ª Habilitação Moto");
  });

  test("returns undefined if product was not found", () => {
    const slug = "invalid-slug";

    const product = useProduct({ slug });

    expect(product).toBeUndefined();
  });
});

describe("useProducts()", () => {
  test("returns a product list", () => {
    const products = useProducts();
    expect(products.length).toBeGreaterThan(1);
  });
});
