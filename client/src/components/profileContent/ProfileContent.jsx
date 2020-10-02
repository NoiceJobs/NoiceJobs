import React, { Component } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { CgProfile } from "react-icons/cg";
import UserDetails from "../userDetails/UserDetails";
import JobsOverview from "../jobsOverview/JobsOverview";

export default class ProfileContent extends Component {
	render() {
		return (
			<div>
				<Container fluid>
					<main>
						<h1 className='font-weight-bolder p-4'>
							<CgProfile className='mr-2' />
							Profile
						</h1>
						<Button variant='outline-success m-3'>+ Add Job {this.props.user.username}</Button>
						<Button variant='outline-success m-3'>+ Add Challenge</Button>{" "}
						<Row>
							<Col xs={3}>
								<UserDetails user={this.props.user} />
							</Col>
							<Col xs={9}>
								<JobsOverview user={this.props.user} />
							</Col>
						</Row>
					</main>
				</Container>
			</div>
		);
	}
}
