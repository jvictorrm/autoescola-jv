import Accordion, { AccordionGroup } from ".";

export default {
  title: "Components/Atoms/Accordion",
  component: Accordion,
};

export const usage = () => (
  <>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      consequuntur neque quaerat, adipisci temporibus commodi hic veritatis
      accusantium aliquid, mollitia repellendus minus. Laborum, sed doloribus!
      Tempora cumque iusto totam maxime.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      consequuntur neque quaerat, adipisci temporibus commodi hic veritatis
      accusantium aliquid, mollitia repellendus minus. Laborum, sed doloribus!
      Tempora cumque iusto totam maxime.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      consequuntur neque quaerat, adipisci temporibus commodi hic veritatis
      accusantium aliquid, mollitia repellendus minus. Laborum, sed doloribus!
      Tempora cumque iusto totam maxime.
    </Accordion>
  </>
);

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Como eu renovo minha CNH?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      consequuntur neque quaerat, adipisci temporibus commodi hic veritatis
      accusantium aliquid, mollitia repellendus minus. Laborum, sed doloribus!
      Tempora cumque iusto totam maxime.
    </Accordion>
    <Accordion title="Como faço a mudança de categoria?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      consequuntur neque quaerat, adipisci temporibus commodi hic veritatis
      accusantium aliquid, mollitia repellendus minus. Laborum, sed doloribus!
      Tempora cumque iusto totam maxime.
    </Accordion>
    <Accordion title="Fui multado, e agora?">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
      consequuntur neque quaerat, adipisci temporibus commodi hic veritatis
      accusantium aliquid, mollitia repellendus minus. Laborum, sed doloribus!
      Tempora cumque iusto totam maxime.
    </Accordion>
  </AccordionGroup>
);
