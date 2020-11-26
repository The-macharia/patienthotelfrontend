import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import { Input } from "antd";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <div className="footer-text">
          <Row>
            <Col lg={4}>
              <div className="ft-about">
                <div className="logo">
                  <a href="/">
                    <img
                      src="data:image/webp;base64,UklGRlYCAABXRUJQVlA4TEoCAAAvVcAGEM9AmG1Uf5RJ3vMUBAJJ/pSbLCAoOm0/g2wjnUIVjuX8VR7hE9k/7lQBQAEAMBQSZNtu2+ZdgCifaHY6979UlDQuIKL/E6DlMDO79bL1Yh1qpL/GDbFLahEc4y0aZK0N0FsGvPbhPQbkg4p/iwJ2IPcaN+STeL1FATcOcth1c0Cqmx7BppHBl7NuF4CzcjKAcHBoYGYB8qJ7i1Cl7pNFKCcJb2bmIZ8oAVf7rYTvkpQgT+FWg6zhb0mOazcukmYDOxoXQOpnBk3zcNCl6qUOSSlLUoCxuYjalSONwJz6QYekdYYsZZMqpO7Hpq0ybqwStDPpdsypbzLUTQEvtS4VsHRr9tAXHbLWAcbvSDbBvXI4bRswNBuY19LtMrSNw+lP2kSaGoTdAPou2goYC4fTusH1RzQSgEkySDsdJHBj0cFpbhA3BvHPSBVg/M4AxiJA1LLCtTDImwj5T6kAt5SOOjgtPdjKIC4y2Go4sJNOPdEF9jsF4spBW2XIiwT36vZwn91HeWEQdhlsMcBpHcF+KySoJ418ZIsCbnfBWDQImwDldyoG7aTijhI0aQBtVSFpWSFtPDTJojLYIiSDLlmUPr5/VQU7GI4gSQnSKuDH6gY76dJVVCBO5npahFsfv57nWwXKLuD61B3UyXBNazu5pnJJw+G61DDlqXjp2/M8PydincqFa1o2B9kscDX9iQzRXJd0w2WGSQWiuSZ9f57nRyVl9qZD80C8dXg0IsSuuVwQqyRliE3S5/M8X4aGNGxueskv378I"
                      alt=""
                    />
                  </a>
                </div>
                <p>
                  We inspire and reach millions of travelers
                  <br /> across 90 local websites
                </p>
                <div className="fa-social">
                  <a href="/">
                    <FaFacebookF />
                  </a>
                  <a href="/">
                    <FaTwitter style={{ color: "white" }} />
                  </a>
                  <a href="/">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={3} className="offset-lg-1">
              <div className="ft-contact">
                <h6>Contact Us</h6>
                <ul>
                  <li>+25470000000</li>
                  <li>info.eldon@gmail.com</li>
                  <li>Ngong Road, Nairobi, Kenya</li>
                </ul>
              </div>
            </Col>
            <Col lg={3} className="offset-lg-1">
              <div className="ft-newslatter">
                <h6>New latest</h6>
                <p>Get the latest updates and offers.</p>

                <form className="fn-form">
                  <div className="d-flex align-items-center">
                    <Input
                      type="email"
                      placeholder="Email"
                      allowClear
                      onChange={(e) => console.log(e)}
                    />
                    <button type="submit" className="fn-form-btn">
                      submit
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="copyright-option">
        <Container>
          <Row>
            <Col lg={7}>
              <ul>
                <li>
                  <a href="/">Contact</a>
                </li>
                <li>
                  <a href="/">Terms of use</a>
                </li>
                <li>
                  <a href="/">Privacy</a>
                </li>
                <li>
                  <a href="/">Covid19 Policy</a>
                </li>
              </ul>
            </Col>
            <Col lg={5}>
              <p>Copyright &copy; 2020. All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
