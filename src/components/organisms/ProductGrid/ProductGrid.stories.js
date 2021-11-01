import ProductGrid from ".";
import PlaceholderImage from "stories/assets/bg-car.jpg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      {
        id: 1,
        image: PlaceholderImage,
        title: "Título1",
        summary: "Lorem ipsum",
      },
      {
        id: 2,
        image: PlaceholderImage,
        title: "Título2",
        summary: "Lorem ipsum",
      },
      {
        id: 3,
        image: PlaceholderImage,
        title: "Título3",
        summary: "Lorem ipsum",
      },
      {
        id: 4,
        image: PlaceholderImage,
        title: "Título4",
        summary: "Lorem ipsum",
      },
      {
        id: 5,
        image: PlaceholderImage,
        title: "Título5",
        summary: "Lorem ipsum",
      },
    ]}
  />
);
