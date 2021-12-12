import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import BgCarImage from "assets/images/bg-car.jpg";
import AboutImage from "draws/About";
import Section from "components/molecules/Section";
import GridContainer from "components/atoms/GridContainer";
import { ImageContainer } from "./styles";
import Footer from "components/organisms/Footer";

const About = () => (
  <>
    <Hero image={BgCarImage}>
      <Heading>
        <h1>Auto Escola JV</h1>
      </Heading>
    </Hero>
    <Section>
      <GridContainer md={2}>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            assumenda veniam autem quisquam? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            assumenda veniam autem quisquam?Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Error assumenda veniam autem
            quisquam?Lorem, ipsum dolor sit amet consectetur adipisicing elit?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            assumenda veniam autem quisquam.
          </p>
          <ul>
            <li>Lorem, ipsum dolor sit amet consectetur.</li>
            <li>Lorem, ipsum dolor sit amet consectetur.</li>
            <li>Lorem, ipsum dolor sit amet consectetur.</li>
            <li>Lorem, ipsum dolor sit amet consectetur.</li>
            <li>Lorem, ipsum dolor sit amet consectetur.</li>
          </ul>
        </div>
        <div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            assumenda veniam autem quisquam?Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Error assumenda veniam autem
            quisquam?Lorem, ipsum dolor sit amet consectetur adipisicing elit?
          </p>
          <center>
            <ImageContainer>
              <AboutImage />
            </ImageContainer>
          </center>
        </div>
      </GridContainer>
    </Section>
    <Section inverse>
      <GridContainer md={2}>
        <div>
          <h4>Missão</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            magnam error officia deserunt, ducimus blanditiis esse eligendi
            magni, dolores eveniet consequatur ipsam ut iste pariatur inventore
            non, voluptas quisquam repellat!
          </p>
        </div>
        <div>
          <h4>Visão</h4>
          <p>
            Ullam cupiditate commodi itaque consectetur. Debitis modi maxime
            aut, quae placeat iure possimus quia blanditiis necessitatibus
            recusandae asperiores veritatis dolores corporis? Sunt molestiae
            enim neque aperiam repudiandae voluptates tenetur totam!
          </p>
        </div>
      </GridContainer>
    </Section>
    <Section>
      <Heading>
        <h2>Conheça nossos professores</h2>
      </Heading>
    </Section>
    <Footer />
  </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
