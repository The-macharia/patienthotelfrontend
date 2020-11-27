import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Navs = () => {
  return (
    <section fixed="top" className="section-nav">
      <TopNav />
      {/* <Row> */}
      <Navbar collapseOnSelect expand="md">
        <Container>
          <Navbar.Brand href="/" className="mr-auto">
            Our Name
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="text-dark">
              <Nav.Link href="/gallery" className="nav-a">
                Gallery
              </Nav.Link>
              <Nav.Link href="/rooms" className="nav-a">
                Rooms
              </Nav.Link>
              <Nav.Link href="/about" className="nav-a">
                About Us
              </Nav.Link>
              <Nav.Link href="/contact" className="nav-a">
                Contact Us
              </Nav.Link>
              <Nav.Link href="/signin" className="nav-a">
                Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* </Row> */}
    </section>
  );
};

export default Navs;

export const TopNav = () => {
  return (
    <div className="top-nav">
      <Container>
        <Row>
          <Col lg={6}>
            <ul className="tn-left">
              <li>
                <FaPhoneAlt style={{ color: "#dfa974", margin: "5px" }} />
                (254) 745 678900
              </li>
              <li>
                <GrMail style={{ color: "#dfa974", margin: "5px" }} />
                mail@patienthotel.com
              </li>
            </ul>
          </Col>
          <Col lg={6}>
            <div className="tn-right">
              <div className="top-social">
                <a href="/">
                  <FaFacebookF />
                </a>
                <a href="/">
                  <FaTwitter />
                </a>
                <a href="/">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
