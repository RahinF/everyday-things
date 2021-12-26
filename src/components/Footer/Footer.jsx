import { Container, Content, Link } from "../Footer/Footer.style";

const Footer = () => {
  return (
    <Container>
      &copy; Everyday Things
      <Content>
        <Link href="#" title="Privacy Policy">
          Privacy Policy
        </Link>
        <Link href="#" title="Terms of Service">
          Terms of Service
        </Link>
      </Content>
    </Container>
  );
};

export default Footer;
