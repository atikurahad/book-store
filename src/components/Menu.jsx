import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icon48 from '../assets/icons-gift-48.webp'

class Menu extends Component {
  state = {};
  render() {
    return (
      <nav className="menu-container">
        <div className="menu-wrapper">
          <Container fluid className="custom-container">
            <Row className="no-gutters">
              <Col sm={{ span: 7, offset: 2 }}>
                <ul className="main-menu d-flex justify-content-between">
                  <li className="main-menu-active">
                    {" "}
                    <a href="/book?ref=nm">বই</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/electronics?ref=nm">ইলেক্ট্রনিক্স</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/product/category/2086/Product?ref=nm">
                      স্টেশনারী ও অন্যান্য
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a className="gift-special" href="/giftfinder?ref=nm">
                      {" "}
                      <img
                        src={Icon48}
                        alt="icon"
                        className="menu-icon"
                      />{" "}
                      গিফট ফাইন্ডার
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="/corporate?ref=nm">প্রাতিষ্ঠানিক অর্ডার</a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="https://blog.rokomari.com/?ref=nm">ব্লগ</a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </nav>
    );
  }
}

export default Menu;
