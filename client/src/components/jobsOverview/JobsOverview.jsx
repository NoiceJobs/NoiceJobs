import React, { Component } from "react";
import { Tab, Tabs } from "react-bootstrap";
import JobsAppliedUser from "../jobsAppliedUser/JobsAppliedUser";

export default class JobsOverview extends Component {
	render() {
		return (
			<Tabs id='controlled-tab-example'>
				<Tab eventKey='home' title='Overview' tabClassName='font-weight-bold text-success active'>
					<JobsAppliedUser />
				</Tab>
				<Tab
					eventKey='profile'
					title='Applied Applicant'
					tabClassName='font-weight-bold text-success text-white'
				>
					<JobsAppliedUser />
				</Tab>
			</Tabs>
		);
	}
}
