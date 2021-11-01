import PropTypes from "prop-types";
import { Body, Media, Root } from "./styles";

//#region CardMedia
export const CardMedia = ({ image }) => <Media image={image} />;

CardMedia.defaultProps = {
  image: undefined,
};

CardMedia.propTypes = {
  image: PropTypes.string,
};
//#endregion

//#region CardBody
export const CardBody = ({ children }) => <Body>{children}</Body>;

CardBody.defaultProps = {
  children: undefined,
};

CardBody.propTypes = {
  children: PropTypes.node,
};

//#endregion

//#region Card
const Card = ({ children }) => <Root>{children}</Root>;

Card.defaultProps = {
  children: undefined,
};

Card.propTypes = {
  children: PropTypes.node,
};

export default Card;
//#endregion
