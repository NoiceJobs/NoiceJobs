// src/components/jobs/Jobs.js

import React, { Component } from "react";
import axios from "axios";
import JobsList from "../jobsList/JobsList";
import AddJob from "./AddJob";
import EditJob from "./EditJob";

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
      <div className="jobss-container">
        <AddJob getData={this.getData} />
        <JobsList jobs={this.state.jobs} />
        <EditJob getData={this.getData} />
      </div>
    );
  }
}
