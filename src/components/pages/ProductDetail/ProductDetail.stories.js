import { buildProduct } from "models/builders/products";
import ProductDetail from ".";

export default {
  title: "Components/Pages/ProductDetail",
  component: ProductDetail,
};

const product = buildProduct();

export const usage = () => <ProductDetail product={product} />;
