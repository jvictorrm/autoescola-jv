import PropTypes from "prop-types";
import GridContainer from "components/atoms/GridContainer";
import Card, { CardBody, CardMedia } from "components/atoms/Card";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import { Toolbar } from "./styles";
import { useState } from "react";

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
            <Card key={product.id}>
              <CardMedia image={product.image} />
              <CardBody>
                <Heading>
                  <h5>{product.title}</h5>
                </Heading>
                <p>{product.summary}</p>
                <div>
                  <Button variant="link" color="primary">
                    Saiba mais
                  </Button>
                </div>
              </CardBody>
            </Card>
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
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      image: PropTypes.string,
      title: PropTypes.string,
      summary: PropTypes.string,
    })
  ),
};

export default ProductGrid;
