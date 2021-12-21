import Heading from "components/atoms/Heading";
import Hero from "components/molecules/Hero";

import BgCarImage from "assets/images/bg-car.jpg";
import Section from "components/molecules/Section";
import Callout, {
  CalloutActions,
  CalloutBody,
  CalloutMedia,
} from "components/atoms/Callout";
import Button from "components/atoms/Button";
import AboutImage from "draws/About";
import Footer from "components/organisms/Footer";
import { PinnedItem, PinnedList } from "./styles";
import { FaHome, FaRegIdCard, FaScroll } from "react-icons/fa";
import BreadCrumb from "components/atoms/BreadCrumb";

const items = [
  { label: "Início", link: "/" },
  { label: "Serviços" },
  { label: "Nome do Serviço" },
];

const ProductDetail = () => (
  <>
    <Hero image={BgCarImage}>
      <Heading>
        <h1>Nome do Serviço</h1>
      </Heading>
      <BreadCrumb items={items} />
    </Hero>
    <Section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        odio assumenda incidunt earum perferendis eligendi iste cupiditate eos
        molestias similique consequatur veniam unde, corporis, possimus fuga non
        autem quam minima!
      </p>
      <p>
        Fugit expedita voluptate ullam ratione, neque impedit, ut quisquam harum
        sint nulla nobis rem. Accusamus distinctio, incidunt similique
        voluptatem, animi maiores, reiciendis numquam voluptas mollitia
        perspiciatis recusandae dolor quia? Possimus.
      </p>
      <p>
        Impedit quis facere ratione fuga esse odio unde iure, quaerat cupiditate
        mollitia alias dolorem reiciendis aliquam cum a? Reprehenderit cumque
        amet consequuntur sapiente tenetur quaerat quis nobis perspiciatis
        cupiditate quibusdam.
      </p>

      <h5>Documentos necessários:</h5>
      <PinnedList>
        <PinnedItem>
          <FaRegIdCard />
          RG
        </PinnedItem>
        <PinnedItem>
          <FaRegIdCard />
          CPF
        </PinnedItem>
        <PinnedItem>
          <FaScroll />
          Certidão de Nascimento ou casamento
        </PinnedItem>
        <PinnedItem>
          <FaHome />
          Comprovante de residência
        </PinnedItem>
      </PinnedList>
    </Section>
    <Section inverse>
      <Callout>
        <CalloutBody>
          <h5>Faça sua matrícula agora mesmo</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            dolor eius corporis exercitationem dolore consequuntur deserunt
            similique ipsa natus aspernatur beatae libero hic, pariatur
            dignissimos maiores modi earum, obcaecati at.
          </p>
          <CalloutActions>
            <Button color="primary">Matricular</Button>
          </CalloutActions>
        </CalloutBody>
        <CalloutMedia>
          <AboutImage />
        </CalloutMedia>
      </Callout>
    </Section>
    <Footer />
  </>
);

ProductDetail.defaultProps = {};

ProductDetail.propTypes = {};

export default ProductDetail;
