import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import BookmarkedJobs from "../bookmarkedJobs/BookmarkedJobs";
import JobsAppliedUser from "../jobsAppliedUser/JobsAppliedUser";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ApplicantJobsOverview extends Component {
  render() {
    return (
      <div>
        <Tabs id="controlled-tab-example">
          <Tab
            eventKey="home"
            title="Applied Jobs"
            tabClassName="font-weight-bold text-info active"
          >
            <JobsAppliedUser user={this.props.user} />
          </Tab>
          {/*<Tab
						eventKey='profile'
						title='Applied Applicant'
						tabClassName='font-weight-bold text-info text-white'
					>
						<BookmarkedJobs />
					</Tab>*/}
        </Tabs>
      </div>
    );
  }
}
