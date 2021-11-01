import Card, { CardBody, CardMedia } from ".";
import Section from "components/molecules/Section";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import PlaceholderImage from "stories/assets/bg-car.jpg";

export default {
  title: "Components/Atoms/Card",
  component: Card,
  subcomponents: { CardBody, CardMedia },
};

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h5>Título</h5>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          ratione quasi, omnis esse itaque minus ullam tempore sit iste at?
        </p>
        <div>
          <Button variant="link" color="primary">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={PlaceholderImage} />
      <CardBody>
        <Heading>
          <h5>Título</h5>
        </Heading>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          ratione quasi, omnis esse itaque minus ullam tempore sit iste at?
        </p>
        <div>
          <Button variant="link" color="primary">
            Saiba mais
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
);
