import Container from "components/atoms/Container";
import PropTypes from "prop-types";
import { Content } from "./styles";

const Section = ({ children }) => (
  <Container>
    <Content>{children}</Content>
  </Container>
);

Section.defaultProps = {
  children: undefined,
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;
