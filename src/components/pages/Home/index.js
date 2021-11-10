import Heading from "components/atoms/Heading";
import Hero from "components/molecules/Hero";
import Button from "components/atoms/Button";
import BgCarImage from "assets/images/bg-car.jpg";
import AboutVideo from "assets/videos/about.mp4";
import GridContainer from "components/atoms/GridContainer";
import { FaAccessibleIcon, FaCar, FaKey, FaMapMarkedAlt } from "react-icons/fa";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import Footer from "components/organisms/Footer";
import ProductGrid from "components/organisms/ProductGrid";
import PlaceholderImage from "stories/assets/bg-car.jpg";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

const products = [
  {
    id: 1,
    image: PlaceholderImage,
    title: "Título1",
    summary: "Lorem ipsum",
  },
  {
    id: 2,
    image: PlaceholderImage,
    title: "Título2",
    summary: "Lorem ipsum",
  },
  {
    id: 3,
    image: PlaceholderImage,
    title: "Título3",
    summary: "Lorem ipsum",
  },
  {
    id: 4,
    image: PlaceholderImage,
    title: "Título4",
    summary: "Lorem ipsum",
  },
  {
    id: 5,
    image: PlaceholderImage,
    title: "Título5",
    summary: "Lorem ipsum",
  },
];

const Home = () => (
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
        <li>Possimus quas consequatur a quaerat fuga molestias cum dolore.</li>
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
    <Section inverse>
      <Heading>
        <h2>Conheça nossos serviços</h2>
        <ProductGrid products={products} />
      </Heading>
    </Section>
    <Section>
      <GridContainer md={2}>
        <div>
          <Heading>
            <h2>Auto Escola JV</h2>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
            accusantium. Iure repellendus necessitatibus doloremque odio nemo
            ratione, tempore consectetur pariatur temporibus magnam dolorem
            consequuntur ea enim tenetur autem id molestiae.
          </p>
          <div>
            <Button color="primary">Saiba mais</Button>
          </div>
        </div>
        <div>
          <video src={AboutVideo} width="100%" autoPlay loop muted />
        </div>
      </GridContainer>
    </Section>
    <Section inverse>
      <Heading>
        <h2>Dúvidas recorrentes</h2>
      </Heading>
      <AccordionGroup>
        <Accordion title="Como eu renovo minha CNH?">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          consequuntur neque quaerat, adipisci temporibus commodi hic veritatis
          accusantium aliquid, mollitia repellendus minus. Laborum, sed
          doloribus! Tempora cumque iusto totam maxime.
        </Accordion>
        <Accordion title="Como faço a mudança de categoria?">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          consequuntur neque quaerat, adipisci temporibus commodi hic veritatis
          accusantium aliquid, mollitia repellendus minus. Laborum, sed
          doloribus! Tempora cumque iusto totam maxime.
        </Accordion>
        <Accordion title="Fui multado, e agora?">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
          consequuntur neque quaerat, adipisci temporibus commodi hic veritatis
          accusantium aliquid, mollitia repellendus minus. Laborum, sed
          doloribus! Tempora cumque iusto totam maxime.
        </Accordion>
      </AccordionGroup>
    </Section>
    <Footer />
  </>
);
Home.defaultProps = {};

Home.propTypes = {};

export default Home;
