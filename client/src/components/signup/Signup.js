import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { signup } from "../../services/auth";
import { GoMarkGithub } from "react-icons/go";
import signupStyle from "./Signup.css";
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  Container,
  Col,
  Row,
  Card,
  ListGroup,
  Carousel,
  CardDeck,
  Image,
  Jumbotron,
} from "react-bootstrap";

export default class Signup extends Component {
  state = {
    username: "",
    password: "",
    isCompany: false,
    message: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleCheckboxChange = (event) => {
    console.log("I am checked", event.target.checked);
    this.setState({ isCompany: event.target.checked });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password, isCompany } = this.state;
    signup(username, password, isCompany).then((data) => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: "",
          isCompany: false,
        });
      } else {
        // now we need to put the user in the user key of the state of App.js
        this.props.setUser(data);
        // redirect to /?
        this.props.history.push("/profile");
      }
    });
  };

  render() {
    return (
    <>

         <h1 className="text-center mt-5">Signup</h1>
        <h2 className="h4 text-light font-w400 text-muted mb-0 text-center">
          Welcome - signup to get a noice job!
        </h2>

        <Container className="d-flex justify-content-center">
          <Row md={4} className="mt-5 mb-5">
            <Col className="text-center loginForm ">
              <Form className="mt-5" onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label htmlFor="username">Username: </Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    id="username"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label htmlFor="password">Password: </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    id="password"
                  />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    name="isCompany"
                    label="I am a company"
                    checked={this.state.isCompany}
                    onChange={this.handleCheckboxChange}
                  />
                </Form.Group>

                {this.state.message && (
                  <Alert variant="danger">{this.state.message}</Alert>
                )}
                <Button className="mb-2" variant="outline-light" type="submit">Signup</Button>
              </Form>

              <p className="mt-5">
                {" "}
                Applying for a job? <br/> Sign in with Github
                <a href="http://localhost:5555/api/auth/github">
                  <GoMarkGithub className="GithubLogo ml-2"></GoMarkGithub>
                </a>
              </p>
            </Col>

            <Col xs={3}>
              <Image className="loginImage" src="https://images.unsplash.com/photo-1495904786722-d2b5a19a8535?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
            </Col>
          </Row>
        </Container>
     </>
    );
  }
}
