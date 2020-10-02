import React, { Component } from "react";
import ReactDOM from "react-dom";
import { UnControlled as CodeMirror } from "react-codemirror2";
import TaskBar from "../../components/taskBar/TaskBar";
import TaskDescription from "../../components/taskDescription/TaskDescription";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import {logout} from '../../services/auth.js';
require("codemirror/mode/javascript/javascript");



const handleLogout = props => {
	logout().then(() => {
		props.setUser(null);
	});
};


class CodeEditor extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			code: 'const name = "Example" ',
		};
	}

	handleChange(newCode) {
		this.setState({ code: newCode });
	}

	render() {
		const options = {
			lineNumbers: true,
			mode: "javascript",
			matchBrackets: true,
			enableCodeFolding: true,
			enableCodeFormatting: true,
			showFormatButton: true,
			theme: "monokai",
		};
		return (
			<div>
				<Navbar bg='dark' variant='dark'>
					<Navbar.Brand href='/'>NoiceJobs</Navbar.Brand>
					<Nav className='ml-auto'>
						<Nav.Link href='#vision' className='font-weight-bold'>
							Profile
						</Nav.Link>
						<Nav.Link href='/jobs' className='font-weight-bold'>
							Jobs
						</Nav.Link>

						<Nav.Link
							href='/'
							onClick={() => handleLogout(this.props)}
							className='font-weight-bold'> Logout</Nav.Link>
					
					


					</Nav>
				</Navbar>

				<Container fluid className='mt-5'>
					<Row>
						<Col xs={4}></Col>
						<Col xs={4} className='text-center'>
							<TaskBar />
						</Col>
						<Col xs={4} className='d-flex justify-content-end'>
							<Button variant='outline-success'>Test</Button>
							<Button variant='success ml-5'>Submit</Button>
						</Col>
					</Row>

					<Row>
						<Col xs={5}>
							<TaskDescription />
						</Col>
						<Col xs={7}>
							<CodeMirror
								value='const hobby = "I ♥ react-codemirror2</h1>"'
								options={{
									mode: "javascript",
									theme: "material",
									lineNumbers: true,
								}}
							/>
						</Col>
					</Row>
					<Row>
						<Col>
							<div className=''>Output</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default CodeEditor;
