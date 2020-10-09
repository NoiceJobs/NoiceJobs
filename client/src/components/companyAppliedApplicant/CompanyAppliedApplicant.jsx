import axios from "axios";
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { SiJavascript } from "react-icons/si";
import { Link } from "react-router-dom";

export default class CompanyAppliedApplicant extends Component {
	state = {
		jobs: [],
		solvedChallenge: [],
	};

	componentDidMount() {
		this.getJobData();
		this.getSolvedChallengeData();
	}

	getJobData() {
		axios.get("api/jobs/applied/applicant").then((response) => {
			this.setState({
				jobs: response.data,
			});
		});
	}

	getSolvedChallengeData = () => {
		axios
			.get("/api/solvedChallenge")
			.then((response) => {
				console.log("SOLVEDCHALLENGE GET: ", response);
				this.setState({
					solvedChallenge: response.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	appliedJobsElement() {
		let jobsApplied = [];
		console.log("jobs company", this.state.jobs);
		this.state.jobs.map((job) => {
			console.log("mapped Job", job);

			job.appliedUsers.map((user) => {
				console.log("applied User", user);

				let solvedChallenges = this.state.solvedChallenge.map((solveChallenge) => {
					console.log("solveChallenge.jobId:::", solveChallenge.jobId);
					console.log("job._id:::", job._id);
					console.log("solveChallenge.isSolved:::", solveChallenge.isSolved);

					if (solveChallenge.jobId === job._id && solveChallenge.userId === user._id) {
						return solveChallenge.isSolved;
					}
				});

				let isSolved = solvedChallenges.filter((value) => {
					return value !== undefined;
				});
				isSolved = isSolved[0];

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
							{isSolved === true ? (
								<Link to={`/view/solved/challenge/${job._id}/${job.challengeId}`}>
									<SiJavascript className='text-success' />
								</Link>
							) : (
								""
							)}
							{isSolved === false ? (
								<Link to={`/view/solved/challenge/${job._id}/${job.challengeId}`}>
									<SiJavascript className='text-danger' />
								</Link>
							) : (
								""
							)}
							{isSolved === undefined ? (
								<Link to={`/solve/challenge/${job._id}/${job.challengeId}`}>
									<SiJavascript className='text-secondary' />
								</Link>
							) : (
								""
							)}
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
