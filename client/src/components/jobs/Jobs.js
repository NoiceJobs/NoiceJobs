// src/components/jobs/Jobs.js

import React, { Component } from "react";
import axios from "axios";
import JobsList from "../jobsList/JobsList";
import AddJob from "./AddJob";
import EditJob from "./EditJob";
import {Container} from "react-bootstrap";

export default class Jobs extends Component {
  state = {
    jobs: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios
      .get("/api/jobs")
      .then((response) => {
        console.log(response);
        this.setState({
          jobs: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="jobs-container">
        {/* <AddJob getData={this.getData} /> */}

        <JobsList user={this.props.user} jobs={this.state.jobs} />

        {/* <EditJob getData={this.getData} /> */}
      </div>
    );
  }
}
