import axios from "axios";
import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import OurNavbar from "../ourNavbar/OurNavbar";
import UserDetails from "../userDetails/UserDetails";

export default class UserView extends Component {
	state = {
		userDetails: {},
	};

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		axios
			.get(`/api/user/${this.props.match.params.id}`)
			.then((response) => {
				console.log(response);
				this.setState({
					userDetails: response.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		console.log(this.state.userDetails);
		return (
			<div>
				<OurNavbar setUser={this.props.setUser} history={this.props.history} isNavAuths={true} />
				<Row className='mt-5'>
					<Col xs={4}></Col>
					<Col xs={4}>
						<div class='card shadow-sm border-0'>
							<h5 class='card-header bg-info text-white font-weight-bolder'>
								{this.state.userDetails.isCompany ? "Company Details" : "Applicant Details"}
							</h5>
							<div class='card-body'>
								<p className='text-left'>
									{this.state.userDetails.name ? (
										<Row>
											<Col xs={4}>
												<span className='text-info font-weight-bold border-bottom-0'>Name: </span>
											</Col>
											<Col xs={6}>{this.state.userDetails.name}</Col>
										</Row>
									) : (
										<Row>
											<Col xs={4}>
												<span className='text-info font-weight-bold border-bottom-0'>Name: </span>
											</Col>
										</Row>
									)}
								</p>
								<p className='text-left'>
									{this.state.userDetails.email ? (
										<Row>
											<Col xs={4}>
												<span className='text-info font-weight-bold border-bottom-0'>E-Mail: </span>
											</Col>
											<Col xs={6}>{this.state.userDetails.email}</Col>
										</Row>
									) : (
										<Row>
											<Col xs={4}>
												<span className='text-info font-weight-bold border-bottom-0'>E-Mail: </span>
											</Col>
										</Row>
									)}
								</p>
								<p className='text-left'>
									{this.state.userDetails.description ? (
										<Row>
											<Col xs={4}>
												<span className='text-info font-weight-bold border-bottom-0'>
													Description:{" "}
												</span>
											</Col>
											<Col xs={6}>{this.state.userDetails.description}</Col>
										</Row>
									) : (
										<Row>
											<Col xs={4}>
												<span className='text-info font-weight-bold border-bottom-0'>
													Description:{" "}
												</span>
											</Col>
										</Row>
									)}
								</p>
								<p className='text-left'>
									{this.state.userDetails.location ? (
										<Row>
											<Col xs={4}>
												<span className='text-info font-weight-bold border-bottom-0'>
													Location:{" "}
												</span>
											</Col>
											<Col xs={6}>{this.state.userDetails.location}</Col>
										</Row>
									) : (
										<Row>
											<Col xs={4}>
												<span className='text-info font-weight-bold border-bottom-0'>
													Location:{" "}
												</span>
											</Col>
										</Row>
									)}
								</p>
								<p className='text-left'>
									{this.state.userDetails.size && this.state.userDetails.isCompany ? (
										<Row>
											<Col xs={4}>
												<span className='text-info font-weight-bold border-bottom-0'>
													Company Size:{" "}
												</span>
											</Col>
											<Col xs={6}>{this.state.userDetails.size}</Col>
										</Row>
									) : (
										""
									)}
								</p>
							</div>
						</div>
					</Col>
					<Col xs={4}></Col>
				</Row>
			</div>
		);
	}
}
