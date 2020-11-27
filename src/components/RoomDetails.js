import { Col, Container, Row } from "react-bootstrap";
import Image1 from "../assets/room1.jpg";
import { HiOutlineChevronRight } from "react-icons/hi";
import PickerDate from "./PickerDate";
import Selection from "./Selection";
import BackButtons from "./BackButton";

const RoomDetails = (props) => {
  return (
    <section className="section-room-details" style={{ paddingTop: "180px" }}>
      <Container>
        <BackButtons />
        <Row>
          <Col sm={12} md={7} lg={8}>
            <div className="room-details-item">
              <img src={Image1} alt="Room Details" />
              <div className="room-details">
                <div className="room-title">
                  <h2>Premium King Room</h2>
                  <h3>
                    159$<span>/PerNight</span>
                  </h3>
                </div>
                <div className="room-text">
                  <p>
                    Sona.com is a leading online accommodation site. We’re
                    passionate about travel. Every day, we inspire and reach
                    millions of travelers across 90 local websites in 41
                    languages.
                  </p>
                  <p>
                    So when it comes to booking the perfect hotel, vacation
                    rental, resort, apartment, guest house, or tree house, we’ve
                    got you covered.
                  </p>
                </div>

                <div className="room-amenities">
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
              </div>
            </div>
          </Col>
          <Col sm={12} md={5} lg={4}>
            <div className="booking-form p-0 mr-0">
              <h3>Book Your Stay</h3>
              <form>
                <div className="check-date">
                  <PickerDate label="Check In:" />
                </div>
                <div className="check-date">
                  <PickerDate label="Check Out:" />
                </div>
                <div className="select-option">
                  <Selection label="Room Type" />
                </div>
                <div className="select-option">
                  <button type="submit">Check Availability</button>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default RoomDetails;
