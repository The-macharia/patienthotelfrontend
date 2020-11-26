import PickerDate from "./PickerDate";
import { Row, Col } from "react-bootstrap";
// import Cards from "./Cards";
// // import Buttons from "./Buttons";
import Selection from "./Selection";

const Hero = (props) => {
  return (
    <Row
      style={{
        // height: "95vh",
        alignItems: "center",
      }}
      className="hero"
    >
      <Col>
        <div className="hero-text">
          <h1>Eldon, a luxury hotel</h1>
          <p>
            Here are the best hotel booking sites, including recommendations for
            international travel and for finding low-priced hotel rooms.
          </p>
          <a href="/" className="primary-btn">
            Discover Now
          </a>
        </div>
      </Col>
      <Col>
        <div className="booking-form">
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
  );
};

export default Hero;
