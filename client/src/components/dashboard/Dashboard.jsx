import React, { Component } from "react";
import { Navbar, Nav, Dropdown, DropdownButton, Container } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar.jsx";
import { GrNotification, MdMessage, MdNotifications } from "react-icons/all";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import SettingsPage from "../settingsPage/SettingsPage.jsx";
import DashboardContent from "../dashboardContent/DashboardContent.jsx";
import Blog from "../blog/Blog.jsx";

export default class Dashboard extends Component {
	state = {
		fullUserName: "" || "Profile",
	};
	render() {
		return (
			<div>
				<Navbar bg='dark' variant='dark'>
					<Navbar.Brand href='/dashboard/' style={{ "margin-left": "5rem" }}>
						NoiceJobs
					</Navbar.Brand>
					<Nav className='ml-auto'>
						<Nav.Link href='/blog'>Blog</Nav.Link>
						<DropdownButton
							alignRight
							id='dropdown-item-button'
							title={this.state.fullUserName}
							variant='dark'
						>
							<Dropdown.Item href='/profile/' as='button'>
								My Profile
							</Dropdown.Item>
							<Dropdown.Item href='/messages/' as='button'>
								Inbox
							</Dropdown.Item>
							<Dropdown.Divider />
							<Dropdown.Item href='/logout' as='button'>
								<span className='text-danger font-weight-bold'>Sign Out</span>
							</Dropdown.Item>
						</DropdownButton>
					</Nav>
				</Navbar>
				<Sidebar />
				<Switch>
					<Route exact path='/dashboard' component={DashboardContent} />
					<Route path='/blog/' component={Blog} />

					<Route path='/settings/' component={SettingsPage} />
				</Switch>
				),
			</div>
		);
	}
}