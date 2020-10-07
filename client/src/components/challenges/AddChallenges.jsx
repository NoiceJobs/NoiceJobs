import React, { Component } from "react";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import axios from "axios";
import OurNavbar from "../ourNavbar/OurNavbar";
import { UnControlled as CodeMirror } from "react-codemirror2";

export default class AddChallenges extends Component {
  state = {
    title: "",
    description: "",
    input: "",
    output: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/challenges/add", {
        title: this.state.title,
        description: this.state.description,
        input: this.state.input,
        output: this.state.output,
      })
      .then((data) => {
        this.setState({
          title: "",
          description: "",
          input: "",
          output: "",
        });
        console.log(data);
        this.props.history.push("/challenges");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <OurNavbar
          isNavAuths={true}
          profile={false}
          setting={false}
          challenge={true}
          job={false}
        />
        <Container className="mt-5 mb-5">

        <h1 className="text-center mt-5 text-info">Add your challenge</h1>
        <h2 className="h4 text-light font-w400 text-muted mb-0 text-center">
          Make it challenging! 😏
        </h2>

          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="title">Title: <span className="text-danger">*</span>{" "}</Form.Label>
              <Form.Control
                type="text"
                id="title"
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                placeholder={"Title of the challenge"}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label htmlFor="description">Description: <span className="text-danger">*</span>{" "}</Form.Label>
              <Form.Control
                type="text"
                id="description"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                placeholder={"Description of the challenge"}
              />
            </Form.Group>
            <Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label htmlFor="input">Input: <span className="text-danger">*</span>{" "}</Form.Label>
                  <Form.Control
                    type="text"
                    id="input"
                    name="input"
                    value={this.state.input}
                    onChange={this.handleChange}
                    placeholder="Parameter Value"
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label htmlFor="output">Output: <span className="text-danger">*</span>{" "}</Form.Label>
                  <Form.Control
                    type="text"
                    id="output"
                    name="output"
                    value={this.state.output}
                    onChange={this.handleChange}
                    placeholder="Expected Output"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button className="btn btn-info btn-block" type="submit">
              Add a challenge
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
