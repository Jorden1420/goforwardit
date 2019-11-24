import React, { Component } from "react";

import Header from "../common/Header";
import Footer from "../common/Footer";

import AOS from "aos";

import { Form, Select, TextArea, Input, Row, Col, Button } from "antd";
import "antd/dist/antd.css";

class Contact extends Component {
  componentDidMount = () => {
    AOS.init();
  };

  onSubmit = e => {
    e.preventDefault();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const { TextArea } = Input;
    const prefixSelector = getFieldDecorator("prefix", {
      initialValue: "86"
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );
    return (
      <div className="contactContainer">
        <Header />
        <div className="container">
          <div className="paddingTop">
            <div className="heading text-center">
              <h1
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                data-aos="fade-up"
              >
                Contact Us
              </h1>
              <p
                data-aos-duration="1050"
                data-aos-easing="ease-in-sine"
                data-aos="fade-up"
              >
                Let's Talk about Your IT Needs!
              </p>
            </div>
            <div className="formContainer">
              <Form onSubmit={e => this.onSubmit(e)}>
                <Form.Item>
                  {getFieldDecorator("fullName", {
                    rules: [
                      {
                        required: true,
                        message: "Please enter your full name"
                      }
                    ]
                  })(<Input placeholder="Name" />)}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("email", {
                    rules: [
                      {
                        required: true,
                        pattern:
                          '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/',
                        message: "Please enter a valid email address"
                      }
                    ]
                  })(<Input placeholder="Email Address" />)}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator("tel", {
                    rules: [
                      {
                        required: true,
                        message: "Please input your phone number!"
                      }
                    ]
                  })(
                    <Input
                      addonBefore={prefixSelector}
                      style={{ width: "100%" }}
                    />
                  )}
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Company URL" />
                </Form.Item>
                <Form.Item>
                  <TextArea rows={4} placeholder="Tell us how we can help" />
                </Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  ghost
                >
                  Log in
                </Button>
              </Form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const contactForm = Form.create({ name: "contact-form" })(Contact);

export default contactForm;
