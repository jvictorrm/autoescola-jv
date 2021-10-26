import Container from "components/atoms/Container";
import GridContainer from "components/atoms/GridContainer";
import { Root, IconContainer, FooterLink } from "./styles";
import Heading from "components/atoms/Heading";
import {
  FaPhone,
  FaBuilding,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => (
  <Root>
    <Container>
      <GridContainer md={3}>
        <div>
          <Heading>
            <h5>Auto Escola JV</h5>
          </Heading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            tempore, velit rerum harum nostrum fugit repellat, eaque explicabo
            ipsam culpa deleniti delectus sapiente, possimus tempora
            perspiciatis voluptate officia? Doloribus, harum?
          </p>
        </div>
        <div>
          <Heading>
            <h5>Contatos</h5>
          </Heading>
          <p>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            (12) 12345-6789
          </p>
          <p>
            <IconContainer>
              <FaBuilding />
            </IconContainer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            voluptatem quibusdam quam quasi deleniti aspernatur maxime eos
            itaque.
          </p>
        </div>
        <div>
          <Heading>
            <h5>Redes Sociais</h5>
          </Heading>
          <p>
            <FooterLink target="_blank" href="#">
              <IconContainer>
                <FaFacebookF />
              </IconContainer>
              Facebook
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="#">
              <IconContainer>
                <FaLinkedinIn />
              </IconContainer>
              LinkedIn
            </FooterLink>
          </p>
          <p>
            <FooterLink target="_blank" href="#">
              <IconContainer>
                <FaTwitter />
              </IconContainer>
              Twitter
            </FooterLink>
          </p>
        </div>
      </GridContainer>
    </Container>
  </Root>
);

export default Footer;
