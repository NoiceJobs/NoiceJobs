import axios from "axios";
import React, { Component } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { BiCog } from "react-icons/bi";
import { BsBriefcaseFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import OurNavbar from "../../components/ourNavbar/OurNavbar";
import { logout } from "../../services/auth";

const handleLogout = (props) => {
	logout().then(() => {
		props.setUser(null);
	});
};

export default class Settings extends Component {
	state = {
		name: this.props.user.name,
		email: this.props.user.email,
		description: this.props.user.description,
		location: this.props.user.location,
		size: this.props.user.size,
		linkedInURL: this.props.user.linkedInURL,
		GithubURL: this.props.user.GithubURL,
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
			.put(`/api/user/company/${id}`, {
				id: this.props.user.id,
				name: this.state.name || this.props.user.name,
				description: this.state.description || this.props.user.description,
				email: this.state.email || this.props.user.email,
				location: this.state.location || this.props.user.location,
				size: this.state.size || this.props.user.size,
				linkedInURL: this.state.linkedInURL || this.props.user.linkedInURL,
				GithubURL: this.state.GithubURL || this.props.user.GithubURL,
			})
			.then((response) => {
				console.log(response, "RESPONSE");
				console.log(this.props, "PROPS");
				// this.setState({
				//   name: response.name,
				//   description: response.description,
				//   email: response.email,
				//   location: response.location,
				//   size: response.size,
				//   linkedInURL: response.linkedInURL,
				//   GithubURL: response.GithubURL,
				// });
				this.props.history.push("/profile");
				this.props.setUser(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	componentDidUpdate(previousProps, previousState) {
		if (previousProps.data !== this.props.data) {
			this.setState({ name: this.props.user.name });
		}
	}

	// componentDidUpdate(prevProps, prevState) {
	//   console.log(
	//     prevProps.user.name !== this.props.user.name,
	//     prevProps.user.name,
	//     this.props.user.name
	//   );
	//   if (prevProps.user.name !== this.props.user.name) {
	//     this.setState({
	//       name: this.props.user.name,
	//     });
	//   }
	// }

	handleSubmitApplicant = (event) => {
		event.preventDefault();
		const id = this.props.user._id;
		console.log("id", id);
		axios
			.put(`/api/user/${id}`, {
				id: this.props.user.id,
				name: this.state.name || this.props.user.name,
				description: this.state.description || this.props.user.description,
				email: this.state.email || this.props.user.email,
				location: this.state.location || this.props.user.location,
				size: this.state.size || this.props.user.size,
				linkedInURL: this.state.linkedInURL || this.props.user.linkedInURL,
				GithubURL: this.state.GithubURL || this.props.user.GithubURL,
			})
			.then((response) => {
				// this.setState({
				//   name: response.name,
				//   description: response.description,
				//   email: response.email,
				//   location: response.location,
				//   linkedInURL: response.linkedInURL,
				//   GithubURL: response.GithubURL,
				// });
				this.props.history.push("/profile");
				this.props.setUser(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		console.log("SETTINGS", this.props);
		return (
			<div>
				<OurNavbar
					setUser={this.props.setUser}
					history={this.props.history}
					isNavAuths={true}
					profile={false}
					setting={true}
					challenge={false}
					job={false}
				/>

				<Container className='mt-5'>
					<h1 className='text-center text-info font-weight-bold'>
						{this.props.user.isCompany ? "Company Profile" : "Applicant Profile"}
					</h1>
					<h2 className='h4 text-light font-w400 text-muted mb-0 text-center'>
						Edit your Profile:
					</h2>
					{this.props.user.isCompany ? (
						<Form onSubmit={this.handleSubmitCompany}>
							<Form.Group>
								<Form.Label htmlFor='name'>Name: </Form.Label>
								<Form.Control
									type='text'
									id='name'
									name='name'
									value={this.state.name}
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='email'>E-Mail: </Form.Label>
								<Form.Control
									type='text'
									id='email'
									name='email'
									value={this.state.email}
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='description'>Description: </Form.Label>
								<Form.Control
									id='description'
									name='description'
									value={this.state.description}
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
									value={this.state.location}
									onChange={this.handleChange}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label htmlFor='size'>Size: </Form.Label>
								<Form.Control
									type='number'
									id='size'
									name='size'
									value={this.state.size}
									onChange={this.handleChange}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label htmlFor='linkedInURL'>Your LinkedIn Link: </Form.Label>
								<Form.Control
									type='text'
									id='linkedInURL'
									name='linkedInURL'
									value={this.state.linkedInURL}
									onChange={this.handleChange}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label htmlFor='GithubURL'>Your Github Link: </Form.Label>
								<Form.Control
									type='text'
									id='GithubURL'
									name='GithubURL'
									value={this.state.GithubURL}
									onChange={this.handleChange}
								/>
							</Form.Group>

							<Button className='btn btn-info' type='submit'>
								Update Company Profile
							</Button>
						</Form>
					) : (
						<Form onSubmit={this.handleSubmitApplicant}>
							<Form.Group>
								<Form.Label htmlFor='name'>Name: </Form.Label>
								<Form.Control
									type='text'
									id='name'
									name='name'
									value={this.state.name}
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='email'>E-Mail: </Form.Label>
								<Form.Control
									type='text'
									id='email'
									name='email'
									value={this.state.email}
									onChange={this.handleChange}
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='description'>Description: </Form.Label>
								<Form.Control
									id='description'
									name='description'
									value={this.state.description}
									onChange={this.handleChange}
									type='text'
								/>
							</Form.Group>
							<Form.Group>
								<Form.Label htmlFor='location'>Location: </Form.Label>
								<Form.Control
									type='text'
									id='location'
									name='location'
									value={this.state.location}
									onChange={this.handleChange}
								/>
							</Form.Group>
							{/* LinkedInLURL: */}
							<Form.Group>
								<Form.Label htmlFor='linkedInURL'>Your LinkedIn Link: </Form.Label>
								<Form.Control
									type='text'
									id='linkedInURL'
									name='linkedInURL'
									value={this.state.linkedInURL}
									onChange={this.handleChange}
								/>
							</Form.Group>
							{/* GithubURL: */}
							<Form.Group>
								<Form.Label htmlFor='GithubURL'>Your Github Link: </Form.Label>
								<Form.Control
									type='text'
									id='GithubURL'
									name='GithubURL'
									value={this.state.GithubURL}
									onChange={this.handleChange}
								/>
							</Form.Group>

							<Button className='btn btn-info' type='submit'>
								Update Applicant Profile
							</Button>
						</Form>
					)}
				</Container>
			</div>
		);
	}
}
