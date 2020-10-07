import axios from "axios";
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { DiJavascript } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { Link } from "react-router-dom";

export default class JobsAppliedUser extends Component {
	state = {
		jobs: [],
		solvedChallenge: []

	};

	getData = () => {
		axios
			.get("/api/jobs")
			.then((response) => {
				console.log('JOBS GET: ',response);
				this.setState({
					jobs: response.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
		}

		getSolvedChallengeData = () => {
			axios
				.get("/api/solvedChallenge")
				.then((response) => {
					console.log('SOLVEDCHALLENGE GET: ',response);
					this.setState({
						solvedChallenge: response.data,
					});
				})
				.catch((error) => {
					console.log(error);
				});
		}



	componentDidMount() {
		this.getData();
		this.getSolvedChallengeData()
	}

	appliedJobsElement() {
		let jobsApplied = [];

		console.log("drinne");
		this.state.jobs.forEach((job, index) => {
			if (job.appliedUsers.length === 0) {
				return "";
			}
			if (job.appliedUsers.includes(this.props.user._id)) {
				console.log("Ich bin in der methode drinne");
				console.log(job)

				let solvedChallenges = this.state.solvedChallenge.map((solveChallenge) => {
					console.log(solveChallenge.jobId)
					if (solveChallenge.jobId === job._id){
						return solveChallenge
					}
				})[0]

				console.log('FILTER SolvedCHALLENGE ::',solvedChallenges)

				jobsApplied.push(
					<tr>
						{" "}
						<td>{index}</td>{" "}
						<td>
						<Link className={"text-info"} to={`/jobs/applicant/${job._id}`}> 
							{job.role} - {job.position}
							</Link>
						</td>{" "}
						<td>{job.location}</td>{" "}
						<td>
							{" "}

							<Link to={`/solve/challenge/${job._id}/${job.challengeId}`}>
								<SiJavascript className='text-secondary' />
							</Link>{" "}
						</td>
					</tr>
				);
			}
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
							<th>#</th>
							<th>Job Position</th>
							<th>Location</th>
							<th>Challenge</th>
						</tr>
					</thead>
					<tbody className='bg-white shadow-sm'>{this.appliedJobsElement()}</tbody>
				</Table>
			</div>
		);
	}

	
}

