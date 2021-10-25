import PropTypes from "prop-types";
import { Root } from "./styles";

const Container = ({ children }) => <Root>{children}</Root>;

Container.defaultProps = {
  children: undefined,
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
