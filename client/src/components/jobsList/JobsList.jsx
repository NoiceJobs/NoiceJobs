import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {logout} from '../../services/auth.js';
import OurNavbar from "../ourNavbar/OurNavbar";



const handleLogout = props => {
	logout().then(() => {
		props.setUser(null);
	});
};

class JobsList extends Component {

  render() {
  
    return (
      <>
		  <OurNavbar isNavAuths={true} profile={false} setting={false} challenge={false} job={true}/>

        <Container>
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
        <Link to="/jobs/add">Add a Job</Link>
        {/* <AddJob /> */}
        {/* <JobDetails/> */}
      </Container>
      </>
    );
  }
}

export default JobsList;
