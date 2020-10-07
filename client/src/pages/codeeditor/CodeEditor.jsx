import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Controlled as CodeMirror } from "react-codemirror2";
import TaskBar from "../../components/taskBar/TaskBar";
import TaskDescription from "../../components/taskDescription/TaskDescription";
import { Button, Col, Container, Nav, Navbar, Row, Spinner } from "react-bootstrap";
import { logout } from "../../services/auth.js";
import OurNavbar from "../../components/ourNavbar/OurNavbar";
import axios from "axios";
require("codemirror/mode/javascript/javascript");

const handleLogout = (props) => {
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
			challenge: {},
			loadingTxt: "",
			value:'',
			codeInitialVal:''
		};
		this.checkSolution = this.checkSolution.bind(this);
	}
	componentDidMount() {
		this.getData();
		this.getInput()
	}
	getData() {
		const challengeId = window.location.href.split("/").slice(-1)[0];
		axios.get(`/api/challenges/${challengeId}`).then((response) => {
			this.setState({
				challenge: response.data,
			});
		});
	}

	handleChange(newCode) {
		this.setState({ code: newCode });
	}
	getInput() {
		let parameterName = "";
		switch (typeof this.state.challenge.input) {
			case "string":
				parameterName = "exampleString";
				break;
			case "number":
				parameterName = "exampleNum";
				break;
			default:
				parameterName = "exampleObj";
		}
		let codeInitial = `function solveChallenge(${parameterName}) {\n\treturn ${parameterName} \n}\nsolveChallenge(${
			parameterName === "exampleString"
				? `"${this.state.challenge.input}"`
				: `"${this.state.challenge.input}"`
		})`
		return codeInitial


	}

	render() {
		console.log(this.state.challenge);
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
				<OurNavbar isNavAuths={true} />

				<Container fluid className='mt-5'>
					<Row className={"mb-5"}>
						<Col xs={4}></Col>
						<Col xs={4} className='text-center'>
							<TaskBar />
						</Col>
						<Col xs={4} className='d-flex justify-content-end'>
							<Button variant='outline-info' onClick={this.checkSolution}>
								Test
							</Button>
							<Button variant='info ml-5'>Submit</Button>
						</Col>
					</Row>

					<Row>
						<Col xs={5}>
							<TaskDescription challenge={this.state.challenge} />
						</Col>
						<Col xs={7}>
							<CodeMirror
								value={this.getInput()}
								options={{
									mode: "javascript",
									theme: "material",
									lineNumbers: true,
								}}
								onBeforeChange={(editor, data, value) => {
									this.setState({value});
								}}
								onChange={(editor, value) => {
									console.log('controlled', {value});
								}}
							/>
							{/*<CodeMirror
								className='codemirror'
								value={this.getInput()}
								options={{
									mode: "javascript",
									theme: "material",
									lineNumbers: true,
								}}
							/>*/}
						</Col>
					</Row>
					<Row>
						<Col>
							<div
								className='testing-area mt-4'
								style={{ height: "300px", backgroundColor: "#212529" }}
							>
								<h5 className='text-light font-weight-bold p-4'>Output</h5>
								<div className='result ml-4'>{this.state.loadingTxt}</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
	checkSolution() {
		const spinner = "<Spinner animation='grow' variant='success' />";
		const checkingCodeTxt = "<p className='text-success'>'Checking your code!!!'</p>";
		let codeMirror = document.querySelector(".codemirror");
		/* let code = codeMirror.value(); */
		console.log(codeMirror);
		this.setState({
			loadingTxt: (
				<div>
					<Spinner animation='grow' variant='success' />{" "}
					<span className='text-success'>Checking your code!!!</span>
				</div>
			),
		});
		setTimeout(() => {
			let code = this.state.value
			let F = new Function(code)
			console.log(F());

			this.setState({
				loadingTxt: "",

			});
			return (F());
			/* console.log("EVALUATE", eval(code)); */
		}, 10000);
		// execute the code which is written in the function
	}

	submitSolution() {}
}

export default CodeEditor;
