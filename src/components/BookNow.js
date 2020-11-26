import { Container, Row, Col } from "react-bootstrap";
import PickerDate from "./PickerDate";
import Selection from "./Selection";

const BookNow = () => {
  return (
    <section className="section-book-now">
      <Container>
        <Row>
          <Col md={6}>
            <div className="booking-form-text">
              <h1>
                Book Now To <br />
                Reserve your room.
              </h1>
            </div>
          </Col>
          <Col md={6}>
            <div className="booking-form" style={{ width: "90%" }}>
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

export default BookNow;
