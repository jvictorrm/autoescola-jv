import faker from "faker";
import products from "./fixtures/products.json";
import PlaceholderImage from "stories/assets/bg-car.jpg";

export const buildProductList = (size) => {
  const result = [];

  for (let i = 1; i <= size; i++) {
    result.push({
      ...products[i],
      image: PlaceholderImage,
    });
  }

  return result;
};

export const buildProduct = () => buildProductList(1).find((p) => true);
