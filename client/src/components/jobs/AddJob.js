import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class AddJob extends Component {
  state = {
    owner: "",
    description: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/jobs", {
        owner: this.state.owner,
        description: this.state.description,
      })
      .then(() => {
        this.setState({
          owner: "",
          description: "",
        });
        this.props.getData();
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
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="owner">owner: </Form.Label>
          <Form.Control
            type="text"
            id="owner"
            name="owner"
            value={this.state.owner}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="description">Description: </Form.Label>
          <Form.Control
            type="text"
            id="description"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button type="submit">Add a job</Button>
      </Form>
    );
  }
}
