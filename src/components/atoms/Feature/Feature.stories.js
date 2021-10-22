import Feature from ".";
import { FaCar, FaKey, FaMapMarkedAlt, FaAccessibleIcon } from "react-icons/fa";
import GridContainer from "components/atoms/GridContainer";

export default {
  title: "Components/Atoms/Feature",
  component: Feature,
};

export const usage = () => (
  <Feature icon={<FaCar />} title="Titulo">
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error assumenda
      veniam autem quisquam?
    </p>
  </Feature>
);

export const withGrid = () => (
  <GridContainer sm={2} md={4}>
    <Feature icon={<FaCar />} title="Titulo">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
        assumenda veniam autem quisquam?
      </p>
    </Feature>
    <Feature icon={<FaKey />} title="Titulo">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
        assumenda veniam autem quisquam?
      </p>
    </Feature>
    <Feature icon={<FaMapMarkedAlt />} title="Titulo">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
        assumenda veniam autem quisquam?
      </p>
    </Feature>
    <Feature icon={<FaAccessibleIcon />} title="Titulo">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
        assumenda veniam autem quisquam?
      </p>
    </Feature>
  </GridContainer>
);
