import React, { Component } from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";

import { Row, Col, Button } from "react-bootstrap";
import AOS from "aos";

import { BackTop } from "antd";
import "antd/dist/antd.css";

export default class Home extends Component {
  componentDidMount = () => {
    AOS.init();
  };

  render() {
    return (
      <div className="homeContainer">
        <Header />
        <BackTop />
        <div className="backgroundImage d-flex">
          <div className="overlayContent ml-auto">
            <div className="content">
              <h1
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                data-aos="fade-up"
              >
                Helping Businesses Move Forward.
              </h1>
              <p
                data-aos-duration="1050"
                data-aos-easing="ease-in-sine"
                data-aos="fade-up"
              >
                Let us build the infrastructure for your success
              </p>
              <Button
                variant="outline-primary"
                size="lg"
                data-aos-duration="1100"
                data-aos-easing="ease-in-sine"
                data-aos="fade-up"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="firstContent">
            <Row className="text-center">
              <Col
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                data-aos="fade-up"
              >
                <i className="fas fa-globe fa-3x"></i>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium quo, sint obcaecati eveniet eum modi. Facilis
                  maxime non distinctio excepturi numquam pariatur quo autem
                  nihil enim. Rem modi asperiores quae!
                </p>
              </Col>
              <Col
                data-aos-duration="1050"
                data-aos-easing="ease-in-sine"
                data-aos="fade-up"
              >
                <i className="fas fa-globe fa-3x"></i>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium quo, sint obcaecati eveniet eum modi. Facilis
                  maxime non distinctio excepturi numquam pariatur quo autem
                  nihil enim. Rem modi asperiores quae!
                </p>
              </Col>
              <Col
                data-aos-duration="1100"
                data-aos-easing="ease-in-sine"
                data-aos="fade-up"
              >
                <i className="fas fa-globe fa-3x"></i>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium quo, sint obcaecati eveniet eum modi. Facilis
                  maxime non distinctio excepturi numquam pariatur quo autem
                  nihil enim. Rem modi asperiores quae!
                </p>
              </Col>
            </Row>
            <Row className="text-center">
              <Col
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                data-aos="fade-up"
              >
                <i className="fas fa-globe fa-3x"></i>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium quo, sint obcaecati eveniet eum modi. Facilis
                  maxime non distinctio excepturi numquam pariatur quo autem
                  nihil enim. Rem modi asperiores quae!
                </p>
              </Col>
              <Col
                data-aos-duration="1050"
                data-aos-easing="ease-in-sine"
                data-aos="fade-up"
              >
                <i className="fas fa-globe fa-3x"></i>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium quo, sint obcaecati eveniet eum modi. Facilis
                  maxime non distinctio excepturi numquam pariatur quo autem
                  nihil enim. Rem modi asperiores quae!
                </p>
              </Col>
              <Col
                data-aos-duration="1100"
                data-aos-easing="ease-in-sine"
                data-aos="fade-up"
              >
                <i className="fas fa-globe fa-3x"></i>
                <h3>Web Development</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Laudantium quo, sint obcaecati eveniet eum modi. Facilis
                  maxime non distinctio excepturi numquam pariatur quo autem
                  nihil enim. Rem modi asperiores quae!
                </p>
              </Col>
            </Row>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
