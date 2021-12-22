import { buildProductList } from "models/builders/products";
import ProductGrid from ".";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

const products = buildProductList(7);

export const usage = () => <ProductGrid products={products} />;
