import GridContainer from "components/atoms/GridContainer";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import PropTypes from "prop-types";
import { ErrorDescription, ErrorTitle, ImageContainer } from "./styles";
import Button from "components/atoms/Button";
import { Link } from "react-router-dom";

const Error = ({ image, title, description }) => (
  <Section>
    <GridContainer md={2}>
      <div>
        <Heading>
          <ErrorTitle>{title}</ErrorTitle>
        </Heading>
        <ErrorDescription>{description}</ErrorDescription>
        <div>
          <Button as={Link} to="/" color="primary">
            Ir para página inicial
          </Button>
        </div>
      </div>
      <div>
        <ImageContainer>{image}</ImageContainer>
      </div>
    </GridContainer>
  </Section>
);

Error.defaultProps = {
  image: undefined,
  title: "",
  description: "",
};

Error.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Error;
