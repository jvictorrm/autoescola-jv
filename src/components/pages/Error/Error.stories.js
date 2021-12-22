import Error from ".";
import AboutImage from "draws/About";

export default {
  title: "Components/Pages/Error",
  component: Error,
};

export const usage = () => (
  <Error
    image={<AboutImage />}
    title="Página não encontrada"
    description="Essa página não existe em nosso sistema :("
  />
);
