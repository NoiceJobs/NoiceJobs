import axios from "axios";
import React, { Component } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { BiCog } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";

export default class Settings extends Component {
	state = {
		name: "",
		email: "",
		description: "",
		location: "",
		size: 0,
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};
	handleSubmitCompany = (event) => {
		event.preventDefault();
		const id = this.props.user._id;
		console.log("id", id);
		axios
			.put(`/api/user/${id}`, {
				id: this.props.user.id,
				name: this.state.name,
				description: this.state.description,
				email: this.state.email,
				location: this.state.location,
				size: this.state.size,
			})
			.then((response) => {
				this.setState({
					name: response.name,
					description: response.description,
					email: response.email,
					location: response.location,
					size: response.size,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	handleSubmitApplicant = (event) => {
		event.preventDefault();
		const id = this.props.user._id;
		console.log("id", id);
		axios
			.put(`/api/user/${id}`, {
				id: this.props.user.id,
				name: this.state.name,
				description: this.state.description,
				email: this.state.email,
				location: this.state.location,
			})
			.then((response) => {
				this.setState({
					name: response.name,
					description: response.description,
					email: response.email,
					location: response.location,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
	render() {
		return (
			<div>
				<Navbar bg='success' variant='dark'>
					<Navbar.Brand href='/profile/' className='border p-2'>
						NoiceJobs
					</Navbar.Brand>
					<Nav className='ml-auto'>
						<Nav.Link href='/profile' className='font-weight-bold h5'>
							<CgProfile className='mr-1' />
							Profile
						</Nav.Link>
						<Nav.Link href='/settings' className='active font-weight-bold h5'>
							<BiCog className='mr-1' />
							Settings
						</Nav.Link>
						<Nav.Link href='/jobs' className='font-weight-bold ml-4 h5'>
							<BsBriefcaseFill className='mr-1' /> Jobs{" "}
						</Nav.Link>
						<Nav.Link
							href='/logout'
							className='font-weight-bold btn btn-light text-danger shadow-sm ml-4 h5'
						>
							<FiLogOut /> Logout
						</Nav.Link>
					</Nav>
				</Navbar>

				<Container className='mt-5'>
					<h1 className='text-center text-success font-weight-bold'>
						{this.props.user.isCompany ? "Company Profile" : "Applicant Profile"}
					</h1>
					{this.props.user.isCompany ? (
						<Form onSubmit={this.handleSubmitCompany}>
							<Form.Group>
								<Form.Label htmlFor='name'>Name: </Form.Label>
								<Form.Control
									type='text'
									id='name '
									name='name '
									value={this.props.user.name}
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='email'>E-Mail: </Form.Label>
								<Form.Control
									type='text'
									id='email'
									name='email'
									value={this.props.user.email}
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='description'>Description: </Form.Label>
								<Form.Control
									id='description'
									name='description'
									value={this.props.user.description}
									onChange={this.handleChange}
									as='select'
								>
									<option>Junior</option>
									<option>Senior</option>
								</Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='location'>Location: </Form.Label>
								<Form.Control
									type='text'
									id='location'
									name='location'
									value={this.props.user.location}
									onChange={this.handleChange}
								/>
							</Form.Group>

							<Button type='submit'>Update Company Profile</Button>
						</Form>
					) : (
						<Form onSubmit={this.handleSubmitApplicant}>
							<Form.Group>
								<Form.Label htmlFor='name'>Name: </Form.Label>
								<Form.Control
									type='text'
									id='name'
									name='name'
									value={this.props.user.name}
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='email'>E-Mail: </Form.Label>
								<Form.Control
									type='text'
									id='email'
									name='email'
									value={this.props.user.email}
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='description'>Description: </Form.Label>
								<Form.Control
									id='description'
									name='description'
									value={this.props.user.description}
									onChange={this.handleChange}
									type='text'
								></Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='location'>Location: </Form.Label>
								<Form.Control
									type='text'
									id='location'
									name='location'
									value={this.props.user.location}
									onChange={this.handleChange}
								/>
							</Form.Group>

							<Button className='btn btn-block bg-success' type='submit'>
								Update Applicant Profile
							</Button>
						</Form>
					)}
				</Container>
			</div>
		);
	}
}
