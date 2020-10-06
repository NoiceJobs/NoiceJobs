import React, { Component } from "react";
import axios from "axios";
import { Button, Card } from "react-bootstrap";
import EditJob from "./EditJob";
import OurNavbar from "../ourNavbar/OurNavbar";

export default class JobDetails extends Component {
	state = {
		job: null,
		error: null,
		position: "",
		description: "",
		owner: {_id: "0"},
		role: "",
		location: "",
		editForm: false,
		username: "",
		name: "",
	};

	getJobData = () => {
		const id = this.props.match.params.id;
		/* console.log("IDDDDDD", id); */
		axios
			.get(`/api/jobs/${id}`)
			.then((response) => {
				console.log("RESPOONSE", response);
				this.setState({
					job: response.data,
					description: response.data.description,
					position: response.data.position,
					owner: response.data.owner,
					role: response.data.role,
					location: response.data.location,
				});
			})
			.catch((error) => {
				console.log("hdhiusfihufsdhiudfhiu", error)
			});
	};

	deleteJob = () => {
		const id = this.props.match.params.id;
		axios
			.delete(`/api/jobs/${id}`)
			.then(() => {
				this.props.history.push("/jobs");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const id = this.props.match.params.id;
		axios
			.put(`/api/jobs/${id}`, {
				job: this.state.data,
				description: this.state.description,
				position: this.state.position,
				owner: this.state.owner,
				role: this.state.role,
				location: this.state.location,
			})
			.then((response) => {
				console.log(response.data);
				this.setState({
					job: response.data,
					description: response.data.description,
					position: response.data.position,
					owner: response.data.owner,
					role: response.data.role,
					location: response.data.location,
					editForm: false,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	toggleEditForm = () => {
		this.setState((state) => ({
			editForm: !state.editForm,
		}));
	};

	componentDidMount() {
		console.log("hello");
		this.getJobData();
	}

	render() {
		{
			console.log("state in Jobdetails", this.state);
			console.log("props in Jobdetails", this.props);
		}

		if (this.state.error) return <div>{this.state.error}</div>;
		if (!this.state.job) return <p>Loading ...</p>;

		let allowedToDelete = false;
		
		const user = this.props.user._id;
		const owner = this.state.owner._id 
		if (user === owner) {
			console.log("The User is the OWWWNER HE CAN DELLETE");

			allowedToDelete = true;
		}

		// just let owner edit job:
		let allowedToEdit = false;
		if (user === owner) {
			console.log("The User is the OWWWNER HE CAN EDDIT");
			allowedToEdit = true;
		}

		return (
			<div>
				<OurNavbar isNavAuths={true} />
				<Card className='text-center'>
					<Card.Header className='bg-info text-white font-weight-bold'>
						{this.state.job.owner.username || this.state.job.owner.username}
					</Card.Header>
					<Card.Body>
						<Card.Title>
							{this.state.job.role || ""} - {this.state.job.position}
						</Card.Title>
						<Card.Text>{this.state.job.description || ""}</Card.Text>
						{allowedToDelete && (
							<Button variant='danger' onClick={this.deleteJob}>
								Delete Job
							</Button>
						)}
						{allowedToEdit && <Button onClick={this.toggleEditForm}>Edit Form</Button>}
						{allowedToEdit && this.state.editForm && (
							<EditJob
								{...this.state}
								handleChange={this.handleChange}
								handleSubmit={this.handleSubmit}
							/>
						)}
					</Card.Body>
					<Card.Footer className='text-muted'>2 days ago</Card.Footer>
				</Card>

				{/* <h1>{this.state.job.owner.username || this.state.job.owner.username}</h1> */}
				{/* <h1>{this.state.job.position}</h1> */}
			</div>
		);
	}
}
