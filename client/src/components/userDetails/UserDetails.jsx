import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";

export default class UserDetails extends Component {
	state = {
		name: "Sparkasse",
		description: "Banking company",
		location: "Germany, Berlin",
		email: "support@sparkasse.de",
		size: "100 Employer",
	};
	render() {
		return (
			<div class='card shadow-sm border-0'>
				<h5 class='card-header bg-success text-white font-weight-bolder'>Company Details</h5>
				<div class='card-body'>
					<p className='text-left'>
						<Row>
							<Col xs={4}>
								<span className='text-success font-weight-bold border-bottom-0'>Name: </span>
							</Col>
							<Col xs={6}>{this.state.name}</Col>
						</Row>
					</p>
					<p className='text-left'>
						<Row>
							<Col xs={4}>
								<span className='text-success font-weight-bold border-bottom-0'>E-Mail: </span>
							</Col>
							<Col xs={6}>{this.state.email}</Col>
						</Row>
					</p>
					<p className='text-left'>
						<Row>
							<Col xs={4}>
								<span className='text-success font-weight-bold border-bottom-0'>Description: </span>
							</Col>
							<Col xs={6}>{this.state.description}</Col>
						</Row>
					</p>
					<p className='text-left'>
						<Row>
							<Col xs={4}>
								<span className='text-success font-weight-bold border-bottom-0'>Location: </span>
							</Col>
							<Col xs={6}>{this.state.location}</Col>
						</Row>
					</p>
					<p className='text-left'>
						<Row>
							<Col xs={4}>
								<span className='text-success font-weight-bold border-bottom-0'>
									Company Size:{" "}
								</span>
							</Col>
							<Col xs={6}>{this.state.size}</Col>
						</Row>
					</p>
				</div>
			</div>
		);
	}
}
