/* eslint-disable jest/valid-title */
import { render, screen, fireEvent } from "test-utils";
import ProductGrid from ".";

const buildProducts = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({ id: i, title: `Title ${i}` });
  }

  return result;
};

const testIf = (condition, ...args) =>
  condition ? test(...args) : test.skip(...args);

describe.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [6, 3],
])("with %i products", (size, showOnly) => {
  test(`show only ${showOnly} items`, () => {
    render(<ProductGrid products={buildProducts(size)} />);

    expect(screen.getAllByRole("heading").length).toBe(showOnly);
  });

  testIf(
    size > 3,
    "show 'show all' button only if size of products is > 3",
    () => {
      render(<ProductGrid products={buildProducts(4)} />);

      expect(screen.getByText("Exibir todos")).toBeInTheDocument();
    }
  );

  testIf(size > 3, "show all the products when button is clicked", async () => {
    render(<ProductGrid products={buildProducts(size)} />);

    await fireEvent.click(screen.getByText("Exibir todos"));

    expect(screen.getAllByRole("heading").length).toBe(size);
  });
});
