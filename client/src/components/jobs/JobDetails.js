import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import EditJob from "./EditJob";

export default class JobDetails extends Component {
  state = {
    job: null,
    error: null,
    position: "",
    description: "",
    owner: "",
    role: "",
    position: "",
    location: "",
    editForm: false,
  };

  getData = () => {
    const id = this.props.match.params.id;
    axios
      .get(`/api/jobs/${id}`)
      .then((response) => {
        this.setState({
          job: response.data,
          description: response.data.description,
          position: response.data.position,
          owner: response.data.owner,
          role: response.data.role,
          location: response.data.location,
        });
      })
      .catch((error) => {
        if (error.response.status === 404) {
          this.setState({
            error: "Not found",
          });
        }
      });
  };

  deleteJob = () => {
    const id = this.props.match.params.id;
    axios
      .delete(`/api/jobs/${id}`)
      .then(() => {
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

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .put(`/api/jobs/${id}`, {
        job: this.state.data,
        description: this.state.description,
        position: this.state.position,
        owner: this.state.owner,
        role: this.state.role,
        location: this.state.location,
      })
      .then((response) => {
        console.log(response.data);
        this.setState({
          job: response.data,
          description: response.data.description,
          position: response.data.position,
          owner: response.data.owner,
          role: response.data.role,
          location: response.data.location,
          editForm: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  toggleEditForm = () => {
    this.setState((state) => ({
      editForm: !state.editForm,
    }));
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    // {
    //   console.log("state in Jobdetails", this.state);
    // }

    if (this.state.error) return <div>{this.state.error}</div>;
    if (!this.state.job) return <p>Loading ...</p>;

    let allowedToDelete = false;
    const user = this.props.user;
    const owner = this.state.job.owner;
    if (user && user._id === owner) allowedToDelete = true;


    // just let owner edit job:
    let allowedToEdit = false;
    if (user && user._id === owner) allowedToEdit = true;

    return (
      <div>
        {console.log("owner", this.state)}
        <h1>{this.state.job.owner}</h1>
        <h1>{this.state.job.position}</h1>
        {allowedToDelete && (
          <Button variant="danger" onClick={this.deleteJob}>
            Delete Job
          </Button>
        )}
        {allowedToEdit && (
          <Button onClick={this.toggleEditForm}>Edit Form</Button>
        )}
        {allowedToEdit && this.state.editForm && (
          <EditJob
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}
