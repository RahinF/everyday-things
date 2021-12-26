import Button  from "../Button/Button";
import { Article, Container } from "./Atmosphere.style";

const Atmosphere = () => {
  return (
    <Container>
      <Article>
        <h2>Creating a modern atmosphere</h2>
        <p>
          Morbi commodo, ipsum sed pharetra gravida, orci magna rhoncus neque,
          id pulvinar odio lorem non turpis. Lorem ipsum dolor sit amet etuer
          adipiscing elit. Pulvinar odio lorem non turpis. Nullam sit amet enim
          lorem.
        </p>
        <Button href="#" title="Creating a modern atmosphere">
          Learn more
        </Button>
      </Article>
    </Container>
  );
};

export default Atmosphere;
