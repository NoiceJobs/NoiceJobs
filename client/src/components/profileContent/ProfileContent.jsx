import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import UserDetails from "../userDetails/UserDetails";
import JobsOverview from "../jobsOverview/JobsOverview";
import ApplicantJobsOverview from "../applicantJobsOverview/ApplicantJobsOverview";
import { Link } from "react-router-dom";
import AddJob from "../jobs/AddJob";

export default class ProfileContent extends Component {
  render() {
    return (
      <div>
        <div className="mt-3 border-bottom border-info mb-5">
          <div className="bg-primary-dark-op">
            <div className="content content-full">
              <div className="py-5 text-center">
                <h1 className="text-info mb-2">
                  Profile
                </h1>
                <h2 className="h4 text-light font-w400 text-muted mb-0">
                  Welcome to your profile!
                </h2>
              </div>
            </div>
          </div>
        </div>
        <Container fluid>
          <main>

            {/*<h1 className="font-weight-bolder p-4">
              <CgProfile className="mr-2" />
              Profile
            </h1>*/}
            {this.props.user.isCompany ? (
              <>
                <Link to="/jobs/add/" className="btn btn-outline-info m-3">
                  + Add Job{" "}
                </Link>
                <Link to="/challenges/add" className="btn btn-outline-info m-3">
                  + Add Challenge
                </Link>
              </>
            ) : (
              ""
            )}
            <Row>
              <Col xs={3}>
                <UserDetails user={this.props.user} />
              </Col>
              <Col xs={9}>
                {this.props.user.isCompany ? (
                  <JobsOverview user={this.props.user} />
                ) : (
                  <ApplicantJobsOverview user={this.props.user} />
                )}
              </Col>
            </Row>
          </main>
        </Container>
      </div>
    );
  }
}
