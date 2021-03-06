import React, { Component } from "react";
import { Tab, Table, Tabs } from "react-bootstrap";
import { SiJavascript } from "react-icons/si";
import JobsAppliedUser from "../jobsAppliedUser/JobsAppliedUser";
import { Link } from "react-router-dom";
import axios from "axios";
import CompanyAppliedApplicant from "../companyAppliedApplicant/CompanyAppliedApplicant";

export default class JobsOverview extends Component {
  state = {
    jobsList: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData() {
    // TODO nur vom Unternehmer anzeigen
    axios.get("/api/jobs/created/:id").then((response) => {
      this.setState({
        jobsList: response.data,
      });
    });
  }

	jobsOverviewRow = () => {
		return this.state.jobsList.map((job, index) => {
			return (
				<tr key={job._id}>
					{" "}
					<td>{index + 1}</td>{" "}
					<td>
						<Link className={"text-info"} to={`/jobs/${job._id}`}>
							{job.role} - {job.position}
						</Link>
					</td>{" "}
					<td>{job.location}</td>{" "}
					<td>
						<Link className={"text-warning"} to={`/challenge/${job.challengeId}`}>
							{" "}
							<SiJavascript />
						</Link>
					</td>{" "}
				</tr>
			);
		});
	};

  render() {
    return (
      <Tabs id="controlled-tab-example">
        <Tab
          eventKey="home"
          title="Overview"
          tabClassName="font-weight-bold text-info active"
        >
          <div>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Job Position</th>
                  <th>Location</th>
                  <th>Challenge</th>
                </tr>
              </thead>
              <tbody className="bg-white shadow-sm">
                {this.jobsOverviewRow()}
              </tbody>
            </Table>
          </div>
        </Tab>
        <Tab
          eventKey="profile"
          title="Applied Applicant"
          tabClassName="font-weight-bold text-info text-white"
        >
          <CompanyAppliedApplicant />
        </Tab>
      </Tabs>
    );
  }
}
