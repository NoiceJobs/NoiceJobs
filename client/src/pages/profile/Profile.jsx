import React, { Component } from "react";
import { Navbar, Nav, Dropdown, DropdownButton, Container } from "react-bootstrap";
import {
	GrNotification,
	MdMessage,
	MdNotifications,
	CgProfile,
	BsBriefcaseFill,
	FiLogOut,
	BiCog,
} from "react-icons/all";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Settings from "../settings/Settings.jsx";
import ProfileContent from "../../components/profileContent/ProfileContent.jsx";
import Blog from "../blog/Blog.jsx";
import JobsList from "../../components/jobsList/JobsList.jsx";
import UserDetails from "../../components/userDetails/UserDetails.jsx";
import CodeEditor from "../codeeditor/CodeEditor.jsx";

export default class Profile extends Component {
	state = {
		fullUserName: "" || "Profile",
	};
	render() {
		return (
			<div>
				<Navbar bg='success' variant='dark'>
					<Navbar.Brand href='/profile/' className='border p-2'>
						NoiceJobs
					</Navbar.Brand>
					<Nav className='ml-auto'>
						<Nav.Link href='/profile' className='active font-weight-bold h5'>
							<CgProfile className='mr-1' />
							Profile
						</Nav.Link>
						<Nav.Link href='/settings' className='font-weight-bold h5'>
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
				<ProfileContent user={this.props.user} />
				{/* <Switch>
					<Route
						exact
						path='/profile'
						render={(props) => <ProfileContent user={this.state.user} {...props} />}
					/>
					<Route path='/jobs' component={JobsList} />
					<Route path='/codeeditor/' component={CodeEditor} />
					<Route path='/logout' component={Blog} />
				</Switch> */}
			</div>
		);
	}
}
