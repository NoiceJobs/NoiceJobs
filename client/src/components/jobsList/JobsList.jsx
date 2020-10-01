import React, { Component } from "react";
import { Container } from "react-bootstrap";
state = {
	owner: "Company Teen",
	description: "You work with a agile Team and will continously develop on the Webapplication!",
	role: "Junior",
	position: "Fullstack Webdeveloper",
	location: "Germany, Berlin",
};

class JobsList extends Component {
	render() {
		return (
			<Container>
				<div>Jobs</div>
			</Container>
		);
	}
}

export default JobsList;
