import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class EditJob extends Component {
  render() {
    return (
      <div>
        <h2>Edit the Job</h2>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="position">Position: </Form.Label>
            <Form.Control
              type="text"
              id="position"
              name="position"
              value={this.props.position}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="location">Location: </Form.Label>
            <Form.Control
              type="text"
              id="location"
              name="location"
              value={this.props.location}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="role">Role: </Form.Label>
            <Form.Control
              id="role"
              name="role"
              value={this.props.role}
              onChange={this.props.handleChange}
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
              value={this.props.description}
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <Button type="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
