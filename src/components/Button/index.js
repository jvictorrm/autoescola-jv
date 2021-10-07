import { ButtonComponent, ButtonOutlined, ButtonLink } from "./styles";
import PropTypes from "prop-types";

const Button = (props) => {
  switch (props.variant) {
    case ButtonVariants.outlined:
      return <ButtonOutlined {...props}>{props.children}</ButtonOutlined>;
    case ButtonVariants.link:
      return <ButtonLink {...props}>{props.children}</ButtonLink>;
    default:
      return <ButtonComponent {...props}>{props.children}</ButtonComponent>;
  }
};

export const ButtonColors = {
  default: "default",
  primary: "primary",
  danger: "danger",
};

export const ButtonVariants = {
  default: "default",
  outlined: "outlined",
  link: "link",
};

const ButtonWrapper = (props) => <Button {...props} />;

ButtonWrapper.defaultProps = {
  type: "button",
  children: undefined,
  color: "default",
  variant: "default",
};

ButtonWrapper.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.values(ButtonColors)),
  variant: PropTypes.oneOf(Object.values(ButtonVariants)),
};

export default ButtonWrapper;
