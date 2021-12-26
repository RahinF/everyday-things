import Button from "../Button/Button";
import { TextHide } from "../Button/Button.style";
import { Container, Hero, LogoText, Logo, Title } from "./Header.style";

const Header = () => {
  return (
    <Container>
      <Logo href="#" title="Everday Things">
       <LogoText>Everday Things</LogoText>
      </Logo>
      <Hero>
        <Title>Add interest with natural textures</Title>
        <Button href="#" title="Get advice from top designers">
          Get advice<TextHide> from top designers</TextHide>
        </Button>
      </Hero>
    </Container>
  );
};

export default Header;
