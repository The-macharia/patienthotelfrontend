import { Container, Row, Navbar, Nav } from "react-bootstrap";

const Navs = () => {
  return (
    <Row>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">Our Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/rooms">Rooms</Nav.Link>
              <Nav.Link href="/gallery">Gallery</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/about">More deets</Nav.Link>
              <Nav.Link href="/signin">Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default Navs;
