import React, { Component } from "react";
import {Container, Navbar, Nav, Card, Button, Row, Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import {logout} from '../../services/auth.js';
import OurNavbar from "../ourNavbar/OurNavbar";



const handleLogout = props => {
	logout().then(() => {
		props.setUser(null);
	});
};


class JobsList extends Component {
 compareDates(date){
     const exDate = "2020/09/20"
    if(Math.round((Math.abs( new Date() - new Date(date))) / 86400000) === 0){
        return "Today"
    } else {
        return Math.round((Math.abs( new Date() - new Date(date))) / 86400000) + " Days ago"
    }
 }

  render() {
  
    return (
      <>
		  <OurNavbar isNavAuths={true} profile={false} setting={false} challenge={false} job={true}/>

        <Container>
        <div>
            <Row>
                <Col className={'text-right'}>

                    <Link className={'btn btn-outline-success btn-sx mt-5'} to="/jobs/add">+ Add a Job</Link>
                </Col>
            </Row>
        </div>
          {this.props.jobs.length > 0 && <h2 className='text-success mb-3'>Jobs</h2>}

                  <Row>

          {this.props.jobs.map((job) => {
            return (
              <div key={job._id}>
                  <Card className="text-center ml-3">
                      <Card.Header>Company Name</Card.Header>
                      <Card.Body>
                          <Card.Title>{job.position} ({job.role})</Card.Title>
                          <Card.Text>
                              {job.description}
                          </Card.Text>
                          {this.props.user.isCompany ? '' : <Link to={'apply'} className='btn btn-success'>Apply Now</Link>}

                      </Card.Body>
                      <Card.Footer className="text-muted">{this.compareDates(job.createdAt)}</Card.Footer>

                  </Card>
                {/*<h3>
                  <Link to={`/jobs/${job._id}`}>{job.position}</Link>
                </h3>*/}
              </div>
            );
          })}

                  </Row>

        {/* <AddJob /> */}
        {/* <JobDetails/> */}
      </Container>
      </>
    );
  }
}

export default JobsList;
