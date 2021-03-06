import React, { Component } from "react";
import { Form, Button, Row } from "react-bootstrap";

export default class EditJob extends Component {
  render() {
    console.log("this.props in edit form", this.props);
    return (
      <div>
        <h3 className="text-center mt-5 text-info">Edit here:</h3>

        <Row className="d-flex justify-content-center" xs={2}>
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
          
          <Row className="d-flex justify-content-center" xs={4}>
          <Button className="btn btn-info btn-block" type="submit">Save</Button>
          </Row>
        </Form>
        </Row>
      </div>
    );
  }
}
