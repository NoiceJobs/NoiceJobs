import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default class AddJob extends Component {
  state = {
    owner: "",
    description: "",
    role: "",
    position: "",
    location: "",
  };
  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/api/jobs", {
        owner: this.state.owner,
        description: this.state.description,
        role: this.state.role,
        position: this.state.position,
        location: this.state.location,
      })
      .then(() => {
        this.setState({
          owner: "",
          description: "",
          role: "",
          position: "",
          location: "",
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
          <Form.Label htmlFor="position">Position: </Form.Label>
          <Form.Control
            type="text"
            id="position"
            name="position"
            value={this.state.position}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="location">Location: </Form.Label>
          <Form.Control
            type="text"
            id="location"
            name="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor="role">Role: </Form.Label>
          <Form.Control
            id="role"
            name="role"
            value={this.state.role}
            onChange={this.handleChange}
            as="select"
          >
            <option>Junior</option>
            <option>Senior</option>
          </Form.Control>
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
