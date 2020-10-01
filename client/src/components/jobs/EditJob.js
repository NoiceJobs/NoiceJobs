import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class EditJob extends Component {
  render() {
    return (
      <div>
        <h2>Edit the Job</h2>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group>
            <Form.Label>Owner: </Form.Label>
            <Form.Control
              type="text"
              name="owner"
              value={this.props.owner}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description: </Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={this.props.description}
              onChange={this.props.handleChange}
            />
          </Form.Group>
          <Button type="submit">Edit</Button>
        </Form>
      </div>
    );
  }
}
