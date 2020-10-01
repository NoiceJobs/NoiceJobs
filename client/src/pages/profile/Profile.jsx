import React, { Component } from "react";
import { Navbar, Nav, Dropdown, DropdownButton, Container } from "react-bootstrap";
import {
	GrNotification,
	MdMessage,
	MdNotifications,
	CgProfile,
	BsBriefcaseFill,
	FiLogOut,
} from "react-icons/all";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Setting from "../settings/Setting.jsx";
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
						<Nav.Link className='font-weight-bold h5'>
							<CgProfile className='mr-1' />
							Profile
						</Nav.Link>
						<Nav.Link className='font-weight-bold ml-4 h5'>
							<BsBriefcaseFill className='mr-1' /> Jobs{" "}
						</Nav.Link>
						<Nav.Link className='font-weight-bold btn btn-light text-danger shadow-sm ml-4 h5'>
							<FiLogOut /> Logout
						</Nav.Link>
					</Nav>
				</Navbar>

				<Switch>
					<Route exact path='/profile' component={ProfileContent} />
					<Route path='/jobs' component={JobsList} />
					<Route path='/codeeditor/' component={CodeEditor} />
					<Route path='/logout' component={Blog} />
				</Switch>
			</div>
		);
	}
}
