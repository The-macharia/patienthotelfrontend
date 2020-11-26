import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/eldon3.jpeg";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Featured = (props) => {
  return (
    <section className="featured-section">
      <Container>
        <Row>
          <div className="about-title text-center w-100">
            <h2>Featured Rooms</h2>
          </div>
        </Row>
        <Row>
          {[...Array(3).keys()].map((el) => (
            <Col md={4} sm={12} key={el}>
              <div className="featured__card">
                <div className="featured__image">
                  <img src={Image1} alt="Room" />
                </div>
                <div className="featured__text w-100">
                  <div className="featured__title">
                    <h2>Room With View</h2>
                    <h3>
                      159$<span>/PerNight</span>
                    </h3>
                  </div>
                  <ul className="featured__list">
                    <li className="featured__list-item">
                      <HiOutlineChevronRight className="featured__list-item--icon" />
                      <span className="featured__list-item--text">
                        Wifi Available
                      </span>
                    </li>
                    <li className="featured__list-item">
                      <HiOutlineChevronRight className="featured__list-item--icon" />
                      <span className="featured__list-item--text">
                        Wifi Available
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="featured__cta text-center">
                  <Link to="/room-details" className="cbtn cbtn--green">
                    Room Details and Booking
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center mr-4 w-100 py-4">
          <Link to="/rooms" className="primary-btn about-btn text-dark">
            See More
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Featured;
