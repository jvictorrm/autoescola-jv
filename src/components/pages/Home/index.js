import Heading from "components/atoms/Heading";
import Hero from "components/molecules/Hero";
import Button from "components/atoms/Button";
import BgCarImage from "assets/bg-car.jpg";
import GridContainer from "components/atoms/GridContainer";
import { FaAccessibleIcon, FaCar, FaKey, FaMapMarkedAlt } from "react-icons/fa";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";

const Home = () => {
  return (
    <>
      <Hero image={BgCarImage}>
        <Heading>
          <h1>
            Ganhe sua <strong>liberdade</strong>
            <br /> para ir e vir
          </h1>
        </Heading>
        <ul>
          <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</li>
          <li>Commodi perspiciatis numquam minima aliquid.</li>
          <li>
            Possimus quas consequatur a quaerat fuga molestias cum dolore.
          </li>
        </ul>
        <Button variant="outlined" color="primary">
          Matricule-se agora
        </Button>
      </Hero>
      <Section>
        <GridContainer sm={2} md={4}>
          <Feature icon={<FaCar />} title="Maior e melhor frota">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              assumenda veniam autem quisquam?
            </p>
          </Feature>
          <Feature icon={<FaKey />} title="Habilitação mais rápida">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              assumenda veniam autem quisquam?
            </p>
          </Feature>
          <Feature icon={<FaMapMarkedAlt />} title="Excelente localização">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              assumenda veniam autem quisquam?
            </p>
          </Feature>
          <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              assumenda veniam autem quisquam?
            </p>
          </Feature>
        </GridContainer>
      </Section>
    </>
  );
};

Home.defaultProps = {};

Home.propTypes = {};

export default Home;
