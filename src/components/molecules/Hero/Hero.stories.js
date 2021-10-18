import Hero from ".";
import BgHighwayImage from "stories/assets/bg-highway.jpg";
import BgCarImage from "stories/assets/bg-car.jpg";
import Heading from "components/atoms/Heading";
import { text } from "@storybook/addon-knobs";
import Button from "components/atoms/Button";

export default {
  title: "Components/Molecules/Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgHighwayImage}>
    <h1>{text("Title", "Ganhe sua liberdade para ir e vir")}</h1>
    <p>{text("Text", "A auto escola líder em aprovação.")}</p>
  </Hero>
);

export const withList = () => (
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
);
