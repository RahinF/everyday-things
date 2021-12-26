import { links } from "./data";
import {
  Arrow,
  Container,
  Link,
  ListItem,
  UnorderedList,
} from "./Navigation.style";

const Navigation = () => {
  
  const getLink = (link, direction) => (
    <Link href={link.href} title={link.title}>
      {link.text}
      {link.sublinks && <Arrow direction={direction} />}
    </Link>
  );

  const getSublink = (links) => (
    <UnorderedList>
      {links.map((link) => (
        <ListItem key={link.title}>
          {getLink(link, "right")}
          {link.sublinks && getSublink(link.sublinks)}
        </ListItem>
      ))}
    </UnorderedList>
  );

  return (
    <Container>
      <UnorderedList>
        {links.map((link) => (
          <ListItem key={link.title}>
            {getLink(link, "down")}
            {link.sublinks && getSublink(link.sublinks)}
          </ListItem>
        ))}
      </UnorderedList>
    </Container>
  );
};

export default Navigation;
