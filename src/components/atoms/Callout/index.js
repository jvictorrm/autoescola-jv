import PropTypes from "prop-types";
import {
  CalloutRoot,
  CalloutBodyRoot,
  CalloutActionsRoot,
  CalloutMediaRoot,
} from "./styles";

//#region CalloutBody
export const CalloutBody = ({ children }) => (
  <CalloutBodyRoot>{children}</CalloutBodyRoot>
);

CalloutBody.defaultProps = {
  children: undefined,
};

CalloutBody.propTypes = {
  children: PropTypes.node,
};
//#endregion

//#region CalloutMedia
export const CalloutMedia = ({ children }) => (
  <CalloutMediaRoot>{children}</CalloutMediaRoot>
);

CalloutMedia.defaultProps = {
  children: undefined,
};

CalloutMedia.propTypes = {
  children: PropTypes.node,
};
//#endregion

//#region CalloutActions
export const CalloutActions = ({ children }) => (
  <CalloutActionsRoot>{children}</CalloutActionsRoot>
);

CalloutActions.defaultProps = {
  children: undefined,
};

CalloutActions.propTypes = {
  children: PropTypes.node,
};
//#endregion

//#region Callout
const Callout = ({ children }) => <CalloutRoot>{children}</CalloutRoot>;

Callout.defaultProps = {
  children: undefined,
};

Callout.propTypes = {
  children: PropTypes.node,
};

export default Callout;
//#endregion
