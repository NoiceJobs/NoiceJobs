import React, { Component } from "react";
import { Col, Modal, Row } from "react-bootstrap";
import axios from "axios";
import { BiCog } from "react-icons/bi";
import { Link } from "react-router-dom";

export default class UserDetails extends Component {
	state = {
		userDetails: {},
	};

	componentDidMount() {
		this.getUserData();
	}

	getUserData = () => {
		axios
			.get(`/api/user/${this.props.user._id}`)
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
		return (
			<div class='card shadow-sm border-0'>
				<h5 class='card-header bg-success text-white font-weight-bolder'>
					{this.props.user.isCompany ? "Company Details" : "Applicant Details"}
					<span className='float-right'>
						<Link className='text-white' to={`/profile/settings/${this.props.user._id}`}>
							<BiCog />
						</Link>
					</span>
				</h5>
				<div class='card-body'>
					<p className='text-left'>
						{this.props.user.name ? (
							<Row>
								<Col xs={4}>
									<span className='text-success font-weight-bold border-bottom-0'>Name: </span>
								</Col>
								<Col xs={6}>{this.state.userDetails.name}</Col>
							</Row>
						) : (
							<Row>
								<Col xs={4}>
									<span className='text-success font-weight-bold border-bottom-0'>Name: </span>
								</Col>
							</Row>
						)}
					</p>
					<p className='text-left'>
						{this.props.user.email ? (
							<Row>
								<Col xs={4}>
									<span className='text-success font-weight-bold border-bottom-0'>E-Mail: </span>
								</Col>
								<Col xs={6}>{this.state.userDetails.email}</Col>
							</Row>
						) : (
							<Row>
								<Col xs={4}>
									<span className='text-success font-weight-bold border-bottom-0'>E-Mail: </span>
								</Col>
							</Row>
						)}
					</p>
					<p className='text-left'>
						{this.props.user.description ? (
							<Row>
								<Col xs={4}>
									<span className='text-success font-weight-bold border-bottom-0'>
										Description:{" "}
									</span>
								</Col>
								<Col xs={6}>{this.state.userDetails.description}</Col>
							</Row>
						) : (
							<Row>
								<Col xs={4}>
									<span className='text-success font-weight-bold border-bottom-0'>
										Description:{" "}
									</span>
								</Col>
							</Row>
						)}
					</p>
					<p className='text-left'>
						{this.props.user.location ? (
							<Row>
								<Col xs={4}>
									<span className='text-success font-weight-bold border-bottom-0'>Location: </span>
								</Col>
								<Col xs={6}>{this.state.userDetails.location}</Col>
							</Row>
						) : (
							<Row>
								<Col xs={4}>
									<span className='text-success font-weight-bold border-bottom-0'>Location: </span>
								</Col>
							</Row>
						)}
					</p>
					<p className='text-left'>
						{this.props.user.size && this.props.user.isCompany ? (
							<Row>
								<Col xs={4}>
									<span className='text-success font-weight-bold border-bottom-0'>
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
		);
	}
}
