import axios from "axios";
import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { DiJavascript } from "react-icons/di";
import { SiJavascript } from "react-icons/si";

export default class JobsAppliedUser extends Component {
	getData = () => {
		axios
			.get("/api/jobs")
			.then((response) => {
				console.log(response);
				this.setState({
					jobs: response.data,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
	componentDidMount() {
		this.getData();
	}
	render() {
		return (
			<div>
				<Table>
					<thead>
						<tr>
							<th>#</th>
							<th>Job Position</th>
							<th>Location</th>
							<th>Challenge</th>

							<th>Applied Applicant</th>
						</tr>
					</thead>
					<tbody className='bg-white shadow-sm'>
						<tr>
							<td>1</td>
							<td>Junior Fullstack Development</td>
							<td>Germany, Berlin</td>
							<td>
								<SiJavascript className='text-warning' />
							</td>
							<td className='text-success'>@mdo</td>
						</tr>
					</tbody>
				</Table>
			</div>
		);
	}
}
