import React, { Component } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../../services/auth.js";
import OurNavbar from "../ourNavbar/OurNavbar";
import axios from "axios";
import { BiBookmark, BiBookmarkPlus } from "react-icons/all";

const handleLogout = (props) => {
	logout().then(() => {
		props.setUser(null);
	});
};

class JobsList extends Component {
	constructor(props) {
		super(props);
		this.applyToCompany = this.applyToCompany.bind(this);
	}
	state = {
		jobs: [],
		users: [],
		appliedCompany: {},
	};
	componentDidMount() {
		this.getData();
	}

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

		axios
			.get("/api/user")
			.then((response) => {
				console.log(response);
				this.setState({
					users: response.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	compareDates(date) {
		const exDate = "2020/09/20";
		if (Math.round(Math.abs(new Date() - new Date(date)) / 86400000) === 0) {
			return "Today";
		} else {
			return Math.round(Math.abs(new Date() - new Date(date)) / 86400000) + " Days ago";
		}
	}

	render() {
		return (
			<>
				<OurNavbar isNavAuths={true} profile={false} setting={false} challenge={false} job={true} />

				<Container>
					<div>
						<Row>
							<Col className={"text-right"}>
								{this.props.user.isCompany ? (
									<Link className={"btn btn-outline-info btn-sx mt-5"} to='/jobs/add'>
										+ Add a Job{" "}
									</Link>
								) : (
									""
								)}
							</Col>
						</Row>
					</div>
					{this.props.jobs.length > 0 && <h2 className='text-info mb-3'>Jobs</h2>}

					<Row>
						<Col xs={6}>
							{this.props.jobs.map((job, index) => {
								return (
									<div key={job._id}>
										<Card className='text-center'>
											<Card.Header>{job.owner ? job.owner.name : job.owner.username}</Card.Header>
											<Card.Body>
												{this.props.user.isCompany ? (
													""
												) : (
													<Link
														to='/bookmark'
														onClick={this.bookmarkJob}
														name={"bookmarkJob"}
														className={
															this.checkIfUserAlreadyBookmarked()[index]
																? "text-secondary"
																: "text-primary"
														}
														target={job._id}
													>
														<BiBookmark />
													</Link>
												)}

												<Card.Title>
													{job.position} ({job.role})
												</Card.Title>
												<Card.Text>{job.description}</Card.Text>
												{this.props.user.isCompany ? (
													""
												) : (
													<Button
														onClick={this.applyToCompany}
														name={"jobApplied"}
														className={
															this.checkIfUserAlreadyApplied()[index]
																? "btn btn-secondary disabled"
																: "btn btn-info"
														}
														disabled={this.checkIfUserAlreadyApplied()[index]}
														value={job._id}
													>
														{this.checkIfUserAlreadyApplied()[index]
															? "Already Applied"
															: "Apply Now"}
													</Button>
												)}
											</Card.Body>
											<Card.Footer className='text-muted'>
												{this.compareDates(job.createdAt)}
											</Card.Footer>
										</Card>
										{/*<h3>
                  <Link to={`/jobs/${job._id}`}>{job.position}</Link>
                </h3>*/}
									</div>
								);
							})}
						</Col>
					</Row>

					{/* <AddJob /> */}
					{/* <JobDetails/> */}
				</Container>
			</>
		);
	}
	checkIfUserAlreadyApplied() {
		let appliedList = this.state.jobs.map((job) => {
			/* if (job.appliedUsers.length === 0) {
				return false;
			} */
			return job.appliedUsers.includes(this.props.user._id);
		});
		console.log(appliedList);
		return appliedList;
	}

	checkIfUserAlreadyBookmarked() {
		let emptyArr = [];
		return this.state.jobs.map((job) => {
			return this.state.users.map((user) => {
				if (user.bookmarkedJobs === undefined || user.bookmarkedJobs === null) {
					emptyArr.push(false);
					return;
				}
				if (user.bookmarkedJobs.length === 0) {
					return false;
				}
			});
		});
	}

	applyToCompany(event, props) {
		axios
			.put("/api/jobs/apply/:id", {
				jobId: event.target.value,
			})
			.then((data) => {
				this.setState({
					appliedCompany: data,
				});
				this.props.history.push("/jobs");
			})
			.catch((error) => {
				console.log(error);
			});

		/*axios
			.post("/api/solvedChallenge/add", {
				userId: this.props.user._id,
			})
			.then((data) => {
				this.setState({
					jobs: data,
				});
				console.log("data", data);
				this.props.history.push("/jobs");
			})
			.catch((error) => {
				console.log(error);
			});*/
	}

	bookmarkJob(event, props) {
		axios
			.put("/api/user/bookmark/:id", {
				jobId: event.target.target,
			})
			.then((data) => {
				this.setState({
					users: data,
				});
				this.props.history.push("/jobs");
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

export default JobsList;
