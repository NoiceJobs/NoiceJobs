import React, { Component } from "react";
import { Tab, Table, Tabs } from "react-bootstrap";
import { SiJavascript } from "react-icons/si";
import JobsAppliedUser from "../jobsAppliedUser/JobsAppliedUser";

export default class JobsOverview extends Component {
	render() {
		return (
			<Tabs id='controlled-tab-example'>
				<Tab eventKey='home' title='Overview' tabClassName='font-weight-bold text-success active'>
					<div>
						<Table>
							<thead>
								<tr>
									<th>#</th>
									<th>Job Position</th>
									<th>Location</th>
									<th>Challenge</th>
								</tr>
							</thead>
							<tbody className='bg-white shadow-sm'>
								<tr>
									<td>1</td>
									<td>Junior Fullstack Development</td>
									<td>Germany, Berlin</td>
									<td>
										<SiJavascript className='text-warning' />
									</td>
								</tr>
							</tbody>
						</Table>
					</div>
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
