import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import BookmarkedJobs from "../bookmarkedJobs/BookmarkedJobs";
import JobsAppliedUser from "../jobsAppliedUser/JobsAppliedUser";

export default class ApplicantJobsOverview extends Component {
	render() {
		return (
			<div>
				<Tabs id='controlled-tab-example'>
					<Tab
						eventKey='home'
						title='Applied Jobs'
						tabClassName='font-weight-bold text-success active'
					>
						<JobsAppliedUser />
					</Tab>
					<Tab
						eventKey='profile'
						title='Applied Applicant'
						tabClassName='font-weight-bold text-success text-white'
					>
						<BookmarkedJobs />
					</Tab>
				</Tabs>
			</div>
		);
	}
}
