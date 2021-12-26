import { Aside, Container, Content, Link } from "./Main.style";
import { asides } from "./data";

const Main = () => {
  return (
    <Container>
      {asides.map(({ title, text, link, icon }) => (
        <Aside key={title}>
          <Content icon={icon}>
            <h3>
              <Link href={link} title={title}>
                {title}
              </Link>
            </h3>
            <p>{text}</p>
          </Content>
        </Aside>
      ))}
    </Container>
  );
};

export default Main;
