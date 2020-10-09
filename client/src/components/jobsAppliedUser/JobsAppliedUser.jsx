import axios from "axios";
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { DiJavascript } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { Link } from "react-router-dom";

export default class JobsAppliedUser extends Component {
	state = {
		jobs: [],
		solvedChallenge: [],
		loading: true,
	};

	getData = () => {
		axios
			.get("/api/jobs")
			.then((response) => {
				console.log("JOBS GET: ", response);
				this.setState({
					jobs: response.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	getSolvedChallengeData = () => {
		axios
			.get("/api/solvedChallenge")
			.then((response) => {
				console.log("SOLVEDCHALLENGE GET: ", response);
				this.setState({
					solvedChallenge: response.data,
					loading: false,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	componentDidMount() {
		this.getData();
		this.getSolvedChallengeData();
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
				console.log(job);

				let solvedChallenges = this.state.solvedChallenge.map((solveChallenge) => {
					console.log("solveChallenge.jobId:::", solveChallenge.jobId);
					console.log("job._id:::", job._id);
					console.log("solveChallenge.isSolved:::", solveChallenge.isSolved);

					if (solveChallenge.jobId === job._id && solveChallenge.userId === this.props.user._id) {
						return solveChallenge.isSolved;
					}
				});

				let isSolved = solvedChallenges.filter((value) => {
					return value !== undefined;
				});
				isSolved = isSolved[0];

				console.log("FILTER SolvedCHALLENGE ::", solvedChallenges);
				/* console.log("isSolved -:::::-", typeof isSolved[0]); */
				jobsApplied.push(
					<tr key={job._id}>
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
						{job.owner ? (
							<td>
								<Link className='text-info' to={`/user/details/${job.owner._id}/view`}>
									{job.owner.name || job.owner.username}
								</Link>
							</td>
						) : (
							<td></td>
						)}
					</tr>
				);
			}
		});
		/*console.log(JSON.stringify(tableRowString))*/
		return jobsApplied;
	}

	render() {
		if (this.state.loading) {
			return <h1>Loading....</h1>;
		}
		return (
			<div>
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Job Position</th>
							<th>Location</th>
							<th>Challenge</th>
							<th>Company</th>
						</tr>
					</thead>
					<tbody className='bg-white shadow-sm'>{this.appliedJobsElement()}</tbody>
				</Table>
			</div>
		);
	}
}
