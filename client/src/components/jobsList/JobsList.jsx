import React, { Component } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {logout} from '../../services/auth.js';



const handleLogout = props => {
	logout().then(() => {
		props.setUser(null);
	});
};

class JobsList extends Component {

  render() {
  
    return (
      <>
      <Navbar bg='dark' variant='dark'>
					<Navbar.Brand href='/'>NoiceJobs</Navbar.Brand>
					<Nav className='ml-auto'>
						<Nav.Link href='#vision' className='font-weight-bold'>
							Profile
						</Nav.Link>
						<Nav.Link href='/jobs' className='font-weight-bold'>
							Jobs
						</Nav.Link>
						<Nav.Link
							href='/'
							onClick={() => handleLogout(this.props)}
							className='font-weight-bold'> Logout</Nav.Link>
					</Nav>
				</Navbar>

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
