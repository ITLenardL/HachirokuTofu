import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Section from "../components/Section";
import dummyText from "../dummyText";
import ScrollStore from "./Store";
import ScrollGallery from "./Gallery";
import ScrollBlog from "./Blog";
// import Search from "./Search";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://scontent-syd2-1.xx.fbcdn.net/v/t1.6435-9/67495217_909029336123818_846884632132583424_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=9267fe&_nc_ohc=yAnJQVj-FR0AX-2nAI3&_nc_ht=scontent-syd2-1.xx&oh=b480bed39b432a65c1b78cd32eebb884&oe=60DD874A">
        <h1>Hachiroku-Tofu</h1>
        <h2>AE86 fan page</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Turn this into a blank block once we move nav under hero</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <p>
              welcome to Hachirokutofu website, this website was created for blablabla please take a look around and subscribe to our mailing list and follow us on social media
            </p>
            <Section
              title="About"
              subtitle={dummyText}
              dark={true}
              id="aboutScroll"
            />
          </Col>
          <Col size="md-6">
            <p>
              Image here (CSS needed for floated boxes)
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <p>
              Image here (CSS needed to float boxes beside each other)
            </p>
          </Col>
          <Col size="md-6">
            <p>
              Some words from the club creator "mr tofu" (insert inspirational quote)
            </p>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>Image block here button on top (BLOG) </h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>latest post from BLOG</h1>
            <Section
              title="Blog"
              subtitle={dummyText}
              dark={false}
              id="blogScroll"
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>GALLERY CAROUSEL</h1>
            <Section
              title="Gallery"
              subtitle={dummyText}
              dark={true}
              id="galleryScroll"
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>Image block here button on top (E-COMM)</h1>
            <Section
              title="Store"
              subtitle={dummyText}
              dark={false}
              id="storeScroll"
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h1>top/sale items 4 cards (carousel?)</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
