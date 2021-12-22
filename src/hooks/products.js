import PlaceholderImage from "stories/assets/bg-car.jpg";

const products = [
  {
    id: 1,
    image: PlaceholderImage,
    title: "1ª Habilitação Carro e Moto",
    slug: "primeira-habilitacao-carro-e-moto",
    summary: "Lorem ipsum",
  },
  {
    id: 2,
    image: PlaceholderImage,
    title: "1ª Habilitação Carro",
    slug: "primeira-habilitacao-carro",
    summary: "Lorem ipsum",
  },
  {
    id: 3,
    image: PlaceholderImage,
    title: "1ª Habilitação Moto",
    slug: "primeira-habilitacao-moto",
    summary: "Lorem ipsum",
  },
  {
    id: 4,
    image: PlaceholderImage,
    title: "Mudança de Categoria Caminhão",
    slug: "mudanca-de-categoria-caminhao",
    summary: "Lorem ipsum",
  },
  {
    id: 5,
    image: PlaceholderImage,
    title: "Aulas Avulsas",
    slug: "aulas-avulsas",
    summary: "Lorem ipsum",
  },
];

export const useProducts = () => products;

export const useProduct = ({ slug }) =>
  products.find((product) => product.slug === slug);
