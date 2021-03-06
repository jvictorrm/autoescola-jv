import styled from "styled-components";
import { ButtonColors } from ".";

const getMainColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.main;
    case ButtonColors.danger:
      return theme.colors.danger.main;
    default:
      return "#e0e0e0";
  }
};

const getDarkColor = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.dark;
    case ButtonColors.danger:
      return theme.colors.danger.dark;
    default:
      return "#5a6268";
  }
};

const getColorText = ({ theme, color }) => {
  switch (color) {
    case ButtonColors.primary:
      return theme.colors.primary.text;
    case ButtonColors.danger:
      return theme.colors.danger.text;
    default:
      return "#212121";
  }
};

const getOutlinedText = (props) =>
  props.color === ButtonColors.default ? "#212121" : getMainColor(props);

const getLinkText = (props) =>
  props.color === ButtonColors.default ? "#757575" : getMainColor(props);

export const ButtonComponent = styled.button`
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 12px 36px;
  cursor: pointer;
  background-color: ${getMainColor};
  border: 2px solid ${getMainColor};
  color: ${getColorText};
  display: inline-block;
  text-decoration: none;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: ${getDarkColor};
    border-color: ${getDarkColor};
  }
`;

export const ButtonOutlined = styled(ButtonComponent)`
  background-color: transparent;
  color: ${getOutlinedText};

  &:hover:not(:disabled) {
    background-color: transparent;
    color: ${getDarkColor};
  }
`;

export const ButtonLink = styled(ButtonComponent)`
  background-color: transparent;
  border-color: transparent;
  color: ${getLinkText};
  padding-left: 0;
  padding-right: 0;

  &:hover:not(:disabled) {
    background-color: transparent;
    border-color: transparent;
    color: ${getDarkColor};
  }
`;
