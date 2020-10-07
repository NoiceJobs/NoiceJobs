import React, { Component } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";

import OurNavbar from "../ourNavbar/OurNavbar";

export default class JobDetailsApplicant extends Component {

	state = {
		job: null,
		error: null,
		position: "",
		description: "",
		role: "",
		location: "",
		username: "",
		name: "",
	};

	getJobData = () => {
		const id = this.props.match.params.id;
		console.log("IDDDDDD", id); 
		axios
			.get(`/api/jobs/${id}`)
			.then((response) => {
				console.log("RESPOONSE", response.data);
				this.setState({
					job: response.data,
					description: response.data.description,
					position: response.data.position,
					role: response.data.role,
					location: response.data.location,
				});
			})
			.catch((error) => {
				console.log("hdhiusfihufsdhiudfhiu", error)
			});
  };
  
  componentDidMount(){
    this.getJobData()
  }


  render() {
    return (
      <div>
      <OurNavbar isNavAuths={true} />
      <Card className='text-center'>
        <Card.Header className='bg-info text-white font-weight-bold'>
        <h1>Applicant</h1>
        </Card.Header>
        <Card.Body>
          
          {this.state.role &&
            <Card.Title>
            {this.state.role}
          </Card.Title>
          } 

          
          {this.state.position &&
            <Card.Title>
            {this.state.position}
          </Card.Title>} 

          <Card.Text>{this.state.description || ''}</Card.Text> 
        </Card.Body>
        <Card.Footer className='text-muted'>2 days ago</Card.Footer>
      </Card>

    </div>
    )
  }
}
