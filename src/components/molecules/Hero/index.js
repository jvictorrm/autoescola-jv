import { Root, Content } from "./styles.js";
import PropTypes from "prop-types";
import Container from "components/atoms/Container";

const Hero = ({ image, children }) => {
  return (
    <Root image={image} data-testid="hero">
      <Container>
        <Content>{children}</Content>
      </Container>
    </Root>
  );
};

Hero.propTypes = {
  /**
   * Background image
   */
  image: PropTypes.string,
  children: PropTypes.node,
};

// Hero.defaultProps = {
//   title: "Meu título",
// };

export default Hero;
