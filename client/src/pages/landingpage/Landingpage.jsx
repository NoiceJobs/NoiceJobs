import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Dropdown,
  DropdownButton,
  Container,
  Col,
  Row,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPeopleFill, BsChatDotsFill } from "react-icons/bs";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Setting from "../settings/Setting.jsx";

export default class Landingpage extends Component {
  state = {
    fullUserName: "" || "Profile",
  };
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">NoiceJobs</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="#vision" className="font-weight-bold">
              Vision
            </Nav.Link>
            <Nav.Link href="#features" className="font-weight-bold">
              Features
            </Nav.Link>
            <Nav.Link href="#team" className="font-weight-bold">
              Team
            </Nav.Link>
            <Nav.Link href="#faq" className="font-weight-bold">
              FAQ
            </Nav.Link>
            <Nav.Link href="#contactus" className="font-weight-bold">
              Contact Us
            </Nav.Link>
            <Nav.Link href="/login" className="font-weight-bold">
              Login
            </Nav.Link>
          </Nav>
        </Navbar>
        <div>
          <h1 id="vision">Vision</h1>
        </div>

        <div>
          <h1 id="features">Features</h1>
          <Card>
            <Card.Header as="h5">Cool Functions</Card.Header>
            <Card.Body>
              <Card.Title>What our website can offer you</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Sign up here</Button>
            </Card.Body>
          </Card>
        </div>

        <div>
          <h1 id="team">Team</h1>
          <Card style={{ width: "40rem" }}>
            <Card.Header as="h5">
              Meet our team <BsFillPeopleFill />
            </Card.Header>
            <Card.Body>
              <Container>
                <Row>
                  <Col>
                    <Card.Title>Sophia </Card.Title>
                    <Card.Text>This is Sophia</Card.Text>
                  </Col>
                  <Col xs={4}>
                    <Card.Title>Tolga</Card.Title>
                    <Card.Text>This is Tolga</Card.Text>
                  </Col>
                  <Col>
                    <Card.Title>Esther</Card.Title>
                    <Card.Text>This is Esther</Card.Text>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </div>

        <div>
          <h1 id="faq">FAQ</h1>
          <Card>
            <Card.Header as="h5">Any Questions?</Card.Header>
            <Card.Body>
              <Card.Title>What our website can offer you</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Sign up here</Button>
            </Card.Body>
          </Card>
        </div>

        <div>
          <h1 id="contactus">Contact Us</h1>
          <Card style={{ width: "18rem" }}>
            <Card.Header>Contact Us</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                LinkedIn <FaLinkedin />
              </ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card>
        </div>

        <Switch>
          <Route exact path="/login" />
        </Switch>
      </div>
    );
  }
}
