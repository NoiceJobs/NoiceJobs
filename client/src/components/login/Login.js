import React, { Component } from "react";
import { login } from "../../services/auth";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import  "../login/login.css";

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


export default class Login extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    login(username, password).then((data) => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: "",
        });
      } else {
        // now we need to put the user in the user key of the state of App.js
        this.props.setUser(data);
        // redirect to /projects
        this.props.history.push("/profile");
      }
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center mt-5">Login</h1>
        <h2 className="h4 text-light font-w400 text-muted mb-0 text-center">
          Welcome back - login to get to your profile!
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
                {this.state.message && (
                  <Alert variant="danger">{this.state.message}</Alert>
                )}

                <br></br>
                {!this.props.user && (
                  <p>
                    {" "}
                    Applying for a job?<br></br> Log in with Github
                    <a href="http://localhost:5555/api/auth/github">
                      <GoMarkGithub className="GithubLogo ml-2"></GoMarkGithub>
                    </a>
                  </p>
                )}
                <Button className="mb-3" variant="outline-light" type="submit">
                  Login
                </Button>
                <br />

                <Link to="/signup">
                  {" "}
                  <Button className="mt-3" variant="outline-light">
                    Need to signup?
                  </Button>
                </Link>
              </Form>
            </Col>

            <Col xs={3}>
              <Image
                className="loginImage"
                src="https://images.unsplash.com/photo-1484387436194-cf7cb70800ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
