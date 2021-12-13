import Callout, { CalloutBody, CalloutMedia, CalloutActions } from ".";
import Button from "components/atoms/Button";
import AboutImage from "draws/About";

export default {
  title: "Components/Atoms/Callout",
  component: Callout,
  subcomponents: { CalloutBody, CalloutMedia, CalloutActions },
};

export const usage = () => (
  <Callout>
    <CalloutBody>
      <h5>Faça sua matrícula agora mesmo</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dolor
        eius corporis exercitationem dolore consequuntur deserunt similique ipsa
        natus aspernatur beatae libero hic, pariatur dignissimos maiores modi
        earum, obcaecati at.
      </p>
      <CalloutActions>
        <Button color="primary">Matricular</Button>
      </CalloutActions>
    </CalloutBody>
    <CalloutMedia>
      <AboutImage />
    </CalloutMedia>
  </Callout>
);
