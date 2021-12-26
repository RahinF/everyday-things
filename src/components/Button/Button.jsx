import { Container } from "./Button.style";

const Button = ({ href, title, children }) => {
  return (
    <Container href={href} title={title}>
      {children}
    </Container>
  );
};

export default Button;
