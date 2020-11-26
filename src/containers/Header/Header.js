import { Container } from "react-bootstrap";
import Image1 from "../../assets/eldon2.jpg";

import Hero from "../../components/Hero";

const Header = () => {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${Image1})`,
      }}
    >
      <Container>
        <Hero />
      </Container>
    </section>
  );
};

export default Header;
