import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <div className="footer">
        <Container>
          <Row>
            <Col className="text-center">
              <span>Copyright &copy; Husnain Project</span>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
