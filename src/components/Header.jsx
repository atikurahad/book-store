import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import HeaderLogo from "./HeaderLogo";
import HeaderEnd from "./HeaderEnd";
import HeaderSearch from "./HeaderSearch";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="main-header-wrapper">
        <div className="main-header top-bar">
          <Container fluid className="custom-container">
            <Row className="no-gutters">
              <Col sm={2}>
                <HeaderLogo />
              </Col>
              <Col sm={7}>
                <HeaderSearch />
              </Col>
              <Col sm={3}>
                <HeaderEnd />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Header;
