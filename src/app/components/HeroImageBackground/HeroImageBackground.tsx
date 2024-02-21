import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './HeroImageBackground.module.css';
import Link from 'next/link';
import { homepage } from '@/app/course/page.data';


export function HeroImageBackground() {
  return (
    <div className={classes.wrapper} style={{ backgroundImage: `url(${homepage.url})` }}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
      <div className={classes.inner}>
        <Title className={classes.title}>
          {homepage.title}
        </Title>
        <Container size={640}>
          <Text size="lg" className={classes.description}>
            {homepage.description}
          </Text>
        </Container>
        <div className={classes.controls}>
          <Link href="/course" passHref>
            <Button className={classes.control} variant="white" size="lg" >
             Contenido
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
