import axios from "axios";
import React, { Component } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { BiCog } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import OurNavbar from "../../components/ourNavbar/OurNavbar";

export default class Settings extends Component {
  state = {
    name: "",
    email: "",
    description: "",
    location: "",
    size: 0,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmitCompany = (event) => {
    event.preventDefault();
    const id = this.props.user._id;
    console.log("id", id);
    axios
      .put(`/api/user/company/${id}`, {
        id: this.props.user.id,
        name: this.state.name || this.props.name,
        description: this.state.description || this.props.description,
        email: this.state.email || this.props.email,
        location: this.state.location || this.props.location,
        size: this.state.size || this.props.size,
      })
      .then((response) => {
        this.setState({
          name: response.name,
          description: response.description,
          email: response.email,
          location: response.location,
          size: response.size,
        });
        this.props.history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSubmitApplicant = (event) => {
    event.preventDefault();
    const id = this.props.user._id;
    console.log("id", id);
    axios
      .put(`/api/user/${id}`, {
        id: this.props.user.id,
        name: this.state.name,
        description: this.state.description,
        email: this.state.email,
        location: this.state.location,
      })
      .then((response) => {
        this.setState({
          name: response.name,
          description: response.description,
          email: response.email,
          location: response.location,
        });
        this.props.history.push("/profile");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <OurNavbar
          isNavAuths={true}
          profile={false}
          setting={true}
          challenge={false}
          job={false}
        />

        <Container className="mt-5">
          <h1 className="text-center text-info font-weight-bold">
            {this.props.user.isCompany
              ? "Company Profile"
              : "Applicant Profile"}
          </h1>
          {this.props.user.isCompany ? (
            <Form onSubmit={this.handleSubmitCompany}>
              <Form.Group>
                <Form.Label htmlFor="name">Name: </Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  value={this.props.user.name}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email">E-Mail: </Form.Label>
                <Form.Control
                  type="text"
                  id="email"
                  name="email"
                  value={this.props.user.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="description">Description: </Form.Label>
                <Form.Control
                  id="description"
                  name="description"
                  value={this.props.user.description}
                  onChange={this.handleChange}
                  type="text"
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="location">Location: </Form.Label>
                <Form.Control
                  type="text"
                  id="location"
                  name="location"
                  value={this.props.user.location}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="size">Size: </Form.Label>
                <Form.Control
                  type="number"
                  id="size"
                  name="size"
                  value={this.props.user.size}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button className="btn btn-info" type="submit">
                Update Company Profile
              </Button>
            </Form>
          ) : (
            <Form onSubmit={this.handleSubmitApplicant}>
              <Form.Group>
                <Form.Label htmlFor="name">Name: </Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  value={this.props.user.name}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="email">E-Mail: </Form.Label>
                <Form.Control
                  type="text"
                  id="email"
                  name="email"
                  value={this.props.user.email}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="description">Description: </Form.Label>
                <Form.Control
                  id="description"
                  name="description"
                  value={this.props.user.description}
                  onChange={this.handleChange}
                  type="text"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor="location">Location: </Form.Label>
                <Form.Control
                  type="text"
                  id="location"
                  name="location"
                  value={this.props.user.location}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button className="btn btn-block bg-info" type="submit">
                Update Applicant Profile
              </Button>
            </Form>
          )}
        </Container>
      </div>
    );
  }
}
