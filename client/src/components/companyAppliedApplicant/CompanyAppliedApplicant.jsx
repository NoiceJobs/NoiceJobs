import axios from "axios";
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { SiJavascript } from "react-icons/si";
import { Link } from "react-router-dom";

export default class CompanyAppliedApplicant extends Component {
	state = {
		jobs: [],
	};

	componentDidMount() {
		this.getJobData();
	}

	getJobData() {
		axios.get("api/jobs/applied/applicant").then((response) => {
			this.setState({
				jobs: response.data,
			});
		});
	}

	appliedJobsElement() {
		let jobsApplied = [];
		console.log("jobs company", this.state.jobs);
		this.state.jobs.map((job) => {
			console.log("mapped Job", job);
			job.appliedUsers.map((user) => {
				console.log("applied User", user);
				jobsApplied.push(
					<tr key={job._id}>
						{" "}
						<td>
							<Link className={"text-info"} to={`/jobs/${job._id}`}>
								{job.role} - {job.position}
							</Link>
						</td>{" "}
						<td>{job.location}</td>{" "}
						<td>
							{" "}
							<Link to={`/solve/challenge/${job.challengeId}`}>
								<SiJavascript className='text-warning' />
							</Link>{" "}
						</td>
						<td>
							<Link className='text-info' to={`/user/details/${user._id}/view`}>
								{user.name || user.username}
							</Link>
						</td>
					</tr>
				);
			});
		});

		/*console.log(JSON.stringify(tableRowString))*/
		return jobsApplied;
	}

	render() {
		return (
			<div>
				<Table>
					<thead>
						<tr>
							<th>Job Position</th>
							<th>Location</th>
							<th>Challenge</th>
							<th>Applied User</th>
						</tr>
					</thead>
					<tbody className='bg-white shadow-sm'>{this.appliedJobsElement()}</tbody>
				</Table>
			</div>
		);
	}
}
