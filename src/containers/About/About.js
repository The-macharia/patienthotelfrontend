import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/eldon3.jpeg";

const About = () => {
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col sm={6}>
            <div className="about-text">
              <div className="about-title">
                <span>About Us</span>
                <h2>
                  Eldon Villas <br /> Ngong Road
                </h2>
              </div>
              <p className="p-fara">
                Sona.com is a leading online accommodation site. We’re
                passionate about travel. Every day, we inspire and reach
                millions of travelers across 90 local websites in 41 languages.
              </p>
              <p className="s-fara">
                So when it comes to booking the perfect hotel, vacation rental,
                resort, apartment, guest house, or tree house, we’ve got you
                covered.
              </p>
              <a href="/" className="primary-btn about-btn">
                Read More
              </a>
            </div>
          </Col>
          <Col sm={6} className="text-center">
            <img src={Image1} alt="Eldon Front" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
