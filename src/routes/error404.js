import Error from "components/pages/Error";
import AboutImage from "draws/About";

const error404 = () => (
  <Error
    image={<AboutImage />}
    title="Página não encontrada"
    description="Essa página não existe em nosso sistema :("
  />
);

export default error404;
