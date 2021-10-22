import PropTypes from "prop-types";
import { Root } from "./styles";

const GridContainer = (props) => <Root {...props}>{props.children}</Root>;

GridContainer.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
};

GridContainer.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

export default GridContainer;
