import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

class JobsList extends Component {
  state = {
    owner: "Company Teen",
    description:
      "You work with a agile Team and will continously develop on the Webapplication!",
    role: "Junior",
    position: "Fullstack Webdeveloper",
    location: "Germany, Berlin",
  };
  render() {
    return (
      <Container>
        <div>Jobs</div>
        <div>
          {this.props.jobs.length > 0 && <h2>Jobs:</h2>}

          {this.props.jobs.map((job) => {
            return (
              <div key={job._id}>
                <h3>
                  <Link to={`/jobs/${job._id}`}>{job.position}</Link>
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default JobsList;
