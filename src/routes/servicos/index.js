import Error from "components/pages/Error";
import ProductDetailPage from "components/pages/ProductDetail";
import { useProduct } from "hooks/products";
import { useScrollToTop } from "hooks/scroll";
import { useParams } from "react-router-dom";
import AboutImage from "draws/About";

const ProductDetail = () => {
  useScrollToTop();

  const { slug } = useParams();
  const product = useProduct({ slug });

  if (!product) {
    return (
      <Error
        image={<AboutImage />}
        title="Serviço não encontrado"
        description="Serviço não encontrado ou não disponível"
      />
    );
  }

  return <ProductDetailPage product={product} />;
};

export default ProductDetail;
