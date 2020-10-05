import axios from "axios";
import React, { Component } from "react";

export default class CompanyAppliedApplicant extends Component {
	state = {
		jobs: [],
	};

	componentDidMount() {
		this.getJobData();
	}

	getJobData() {
		axios.get("/api/jobs/created/:id").then((response) => {
			this.setState({
				jobsList: response.data,
			});
		});
	}

	render() {
		return <div>asdasd</div>;
	}
}
