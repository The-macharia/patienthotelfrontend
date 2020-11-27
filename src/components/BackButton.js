import { MdArrowBack } from "react-icons/md";
import { Col, Row } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const BackButtons = (props) => {
  return (
    <Row style={{ marginBottom: "2.5rem" }}>
      <Col>
        <button
          style={{ fontSize: "1.8rem" }}
          className="btn mb-4 btn-outline-dark"
          onClick={() => props.history.goBack()}
        >
          <MdArrowBack />
          go Back
        </button>
      </Col>
    </Row>
  );
};

export default withRouter(BackButtons);
