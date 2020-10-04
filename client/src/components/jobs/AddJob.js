import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import {Link} from "react-router-dom";
import {SiJavascript} from "react-icons/all";

export default class AddJob extends Component {
  state = {
    owner: "",
    description: "",
    role: "",
    position: "",
    location: "",
      challenges: [],
      challengeId: ''
  };

  handleSubmit = (event) => {
    event.preventDefault();
      console.log(this.state.challenges);
      axios
      .post("/api/jobs/add", {
        owner: this.state.owner,
        description: this.state.description,
        role: this.state.role || 'Junior',
        position: this.state.position,
        location: this.state.location,
          challenges: this.state.challenges,
          challengeId: this.state.challengeId
      })
      .then((data) => {
        this.setState({
          owner: "",
          description: "",
          role: "",
          position: "",
          location: "",
            challenge:[],
            challengeId:''
        });
        console.log(data);
        this.props.history.push("/jobs");
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
    handleChallenge = (event) => {
        const { name, value } = event.target;
        console.log(value)
        this.setState({
            [name]: value,

        });
    };

  componentDidMount() {
      this.challengeData()
  }

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
          <Form.Group>
              <Form.Label htmlFor="challenge">Challenge: </Form.Label>
              <Form.Control
                  id="challenge"
                  name="challengeId"
                  title={this.state.selectedChallenge}
                  value={this.state.challenge}
                  onChange={this.handleChallenge}
                  as="select"
              >
                  <option></option>
                  {this.challengeSelection()}
              </Form.Control>
          </Form.Group>
        <Button type="submit">Add a job</Button>
      </Form>
    );
  }

    challengeSelection() {
        return this.state.challenges.map((challenge, index) => {
            return <option title={challenge._id}>{challenge._id}</option>
        })
    }

    challengeData() {
        axios.get('/api/challenges/')
            .then((response) => {
                this.setState({
                    challenges: response.data
                });

            });
    }
}
