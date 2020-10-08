import React, { Component } from "react";
import OurNavbar from "../ourNavbar/OurNavbar";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import TaskDescription from "../taskDescription/TaskDescription";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/all";

class CodeView extends Component {
	state = {
		solvedChallenge: [],
		challenge: [],
	};
	componentDidMount() {
		this.getData();
		console.log(this.state.solvedChallenge);
	}
	getData() {
		const jobId = window.location.href.split("/").slice(-2)[0];
		const challengeId = window.location.href.split("/").slice(-1)[0];
		console.log(jobId);
		console.log(challengeId);

		axios.get(`/api/solvedChallenge/${jobId}/${challengeId}`).then((response) => {
			console.log(response.data[0]);
			this.setState({
				solvedChallenge: response.data[0],
				challenge: response.data[0].challengeId,
			});
			console.log(this.state.solvedChallenge);
		});
	}
	render() {
		return (
			<div>
				<OurNavbar setUser={this.props.setUser} history={this.props.history} isNavAuths={true} />
				<Container className='mt-5'>
					<Row>
						<Col xs={6}>
							<TaskDescription challenge={this.state.challenge} />
						</Col>
						<Col xs={6}>
							<div className='card task-description m-1'>
								{this.getData}
								<div className='card-header bg-info text-light font-weight-bold'>Solution</div>
								<div className='card-body'>
									<Row>
										<Col xs={12} style={{ backgroundColor: "#F7F7F7" }} className={"pb-3"}>
											<pre className={"text-info font-weight-bold"}>submitted Code: </pre>
											<code className={"text-dark"}>{this.state.solvedChallenge.solution}</code>
										</Col>
									</Row>
								</div>

								{this.state.solvedChallenge.isSolved ? (
									<div className={"card-footer text-success font-weight-bold"}>
										<span>
											<AiFillCheckCircle /> Congratulation your Code is correct !!!
										</span>
									</div>
								) : (
									<div className={"card-footer text-danger font-weight-bold"}>
										<span>
											<AiFillCloseCircle /> Sadly you submitted Code is wrong !!!
										</span>
									</div>
								)}
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default CodeView;
