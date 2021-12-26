import { asides } from "./data";
import { Aside, Blockquote, Container, Content, Credit, Image, Link, Quote, Text, Title } from "./HowTo.style";

const HowTo = () => {
  return (
    <Container>
        {asides.map(({title, text, image, link}) => 
            <Aside key={title}>
            <Content>
              <Image src={image.src} alt={image.alt} />
              <Title>{title}</Title>
              <Text>{text}</Text>
              <Link title={link.title} href={link.href}>
                {link.text}
              </Link>
            </Content>
          </Aside>
            )}
     
   
      <Blockquote>
        <Quote>
          Lorem ipsum dolor sit amet conse ctetuer adipiscing elit. Morbi comod
          sed dolor sit amet consect adipiscing elit.
        </Quote>
        <Credit>
          <strong>Author Name</strong>
          <br />
          <em>Business Title</em>
          <br />
          Company
        </Credit>
      </Blockquote>
    </Container>
  );
};

export default HowTo;
