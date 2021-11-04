import PropTypes from "prop-types";
import { Body, Head, Root } from "./styles";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { useState, cloneElement, Children } from "react";

//#region AccordionGroup
export const AccordionGroup = ({ children }) => {
  const [index, setIndex] = useState(-1);

  return Children.map(children, (child, childIndex) =>
    cloneElement(child, {
      open: childIndex === index,
      onChange: () => {
        if (childIndex === index) {
          setIndex(-1);
          return;
        }
        setIndex(childIndex);
      },
    })
  );
};

AccordionGroup.defaultProps = {
  children: undefined,
};

AccordionGroup.propTypes = {
  children: PropTypes.node,
};
//#endregion

//#region Accordion
const Accordion = ({ title, open: pOpen, onChange, children }) => {
  const [sOpen, setSopen] = useState(false);

  const isControlled = pOpen !== undefined;
  const open = isControlled ? pOpen : sOpen;

  const handleOpenBody = () => {
    const newState = !open;
    if (!isControlled) {
      setSopen(newState);
    }
    onChange(newState);
  };

  return (
    <Root open={open}>
      <Head role="button" onClick={handleOpenBody}>
        <h5>{title}</h5>
        {open ? <MdExpandLess /> : <MdExpandMore />}
      </Head>
      {open && <Body>{children}</Body>}
    </Root>
  );
};

Accordion.defaultProps = {
  title: undefined,
  children: undefined,
  open: undefined,
  onChange: () => {},
};

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  open: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Accordion;
//#endregion
