import ProductDetailPage from "components/pages/ProductDetail";
import { useProduct } from "hooks/products";
import { useScrollToTop } from "hooks/scroll";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  useScrollToTop();

  const { slug } = useParams();
  const product = useProduct({ slug });
  return <ProductDetailPage product={product} />;
};

export default ProductDetail;
