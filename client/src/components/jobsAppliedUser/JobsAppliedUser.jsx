import axios from "axios";
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { DiJavascript } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import {Link} from "react-router-dom";

export default class JobsAppliedUser extends Component {
	state = {
		jobs: [],
	};

	getData = () => {
		axios
			.get("/api/jobs")
			.then((response) => {
				console.log(response);
				this.setState({
					jobs: response.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
	componentDidMount() {
		this.getData();
	}
	render() {
		return (
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
						{this.appliedJobsElement()}
					</tbody>
				</Table>
			</div>
		);
	}

	appliedJobsElement() {
		let jobsApplied= []
		console.log('drinne')
		this.state.jobs.forEach((job, index) => {
			if (job.appliedUsers.length === 0) {
				return ''
			}
			if (job.appliedUsers.includes(this.props.user._id)) {
				console.log('Ich bin in der methode drinne')
				jobsApplied.push(<tr> <td>{index}</td> <td>{job.role} - {job.position}</td> <td>{job.location}</td> <td> <Link to={`/solve/challenge/${job.challengeId}`}><SiJavascript className='text-warning' /></Link> </td></tr>)
			}
		})
		/*console.log(JSON.stringify(tableRowString))*/
		return jobsApplied
	}
}
