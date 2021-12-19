import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Item, Root } from "./styles";

const BreadCrumb = ({ items }) => (
  <Root>
    {items.map((item) => (
      <Item
        as={item.link && Link}
        to={item.link}
        key={item.label}
        isClickable={!!item.link}
      >
        {item.label}
      </Item>
    ))}
  </Root>
);

BreadCrumb.defaultProps = {
  items: [],
};

BreadCrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default BreadCrumb;
