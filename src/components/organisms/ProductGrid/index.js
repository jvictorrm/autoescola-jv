import PropTypes from "prop-types";
import GridContainer from "components/atoms/GridContainer";
import Card, { CardBody, CardMedia } from "components/atoms/Card";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import { Toolbar } from "./styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import ProductType from "types/ProductType";

const ProductGrid = ({ products }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <GridContainer md={3}>
        {products
          .filter((_, index) =>
            showAll ? index <= products.length - 1 : index <= 2
          )
          .map((product) => (
            <div key={product.id}>
              <Card>
                <CardMedia image={product.image} />
                <CardBody>
                  <Heading>
                    <h5>{product.title}</h5>
                  </Heading>
                  <p>{product.summary}</p>
                  <div>
                    <Button
                      variant="link"
                      color="primary"
                      as={Link}
                      to={`/servicos/${product.slug}`}
                    >
                      Saiba mais
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          ))}
      </GridContainer>
      {products.length > 3 && (
        <Toolbar>
          <Button onClick={() => setShowAll(!showAll)} variant="outlined">
            {!showAll ? "Exibir todos" : "Recolher"}
          </Button>
        </Toolbar>
      )}
    </>
  );
};

ProductGrid.defaultProps = {
  products: [],
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(ProductType),
};

export default ProductGrid;
