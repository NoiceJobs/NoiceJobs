import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Controlled as CodeMirror } from "react-codemirror2";
import TaskBar from "../../components/taskBar/TaskBar";
import TaskDescription from "../../components/taskDescription/TaskDescription";
import { Button, Col, Container, Nav, Navbar, Row, Spinner } from "react-bootstrap";
import { logout } from "../../services/auth.js";
import OurNavbar from "../../components/ourNavbar/OurNavbar";
import axios from "axios";
import {AiFillCheckCircle, AiFillCloseCircle, BiError, GiTick} from "react-icons/all";
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
			codeInitialVal:'',
			isSolved: false,
			solvedChallengeObj: {},
			isCheckSolutionRunned:false,
			jobId: ''
		};
		this.checkSolution = this.checkSolution.bind(this);
		this.submitSolution = this.submitSolution.bind(this)
	}
	componentDidMount() {
		this.getData();
		this.getInput()
	}
	getData() {
		const challengeId = window.location.href.split("/").slice(-1)[0];
		const jobId = window.location.href.split("/").slice(-2)[0]
		axios.get(`/api/challenges/${challengeId}`).then((response) => {
			this.setState({
				challenge: response.data,
				jobId: jobId
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
							<Button variant='info ml-5' onClick={this.submitSolution}>Submit</Button>
						</Col>
					</Row>

					<Row>
						<Col xs={5}>
							<TaskDescription challenge={this.state.challenge} />
						</Col>
						<Col xs={7}>
							<CodeMirror
								value={this.state.value}
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
		let isSolved =  false
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
			try {
				if (F() === this.state.challenge.output) {
					isSolved =  true
				}
			} catch (err){
				isSolved = false
			}

			if (isSolved) {
				this.setState({
					loadingTxt: (
						<div className='btn-light w-25 rounded p-2'>
							<AiFillCheckCircle className='text-success' />
							<span className='text-success font-weight-bold'>Your code is correct!!!</span>
						</div>
					),
					isSolved: true
				});
			} else {
				this.setState({
					loadingTxt: (
						<div className='btn-light w-25 rounded p-2'>
							<AiFillCloseCircle className='text-danger' />
							<span className='text-danger font-weight-bold'>Your code is wrong!!!</span>
						</div>
					),
					isSolved: false
				});
			}


		}, 5000);

	}

	submitSolution() {
		this.checkSolution()
		setTimeout(() => {
			axios
				.post("/api/solvedChallenge/add", {
					challengeId: this.state.challenge._id,
					isSolved: this.state.isSolved,
					userId: this.props.user._id,
					solution: this.state.value,
					jobId: this.state.jobId

				})
				.then((data) => {
					this.setState({
						solvedChallengeObj:data
					});
					console.log(data);
					this.props.history.push("/profile");
				})
				.catch((error) => {
					console.log(error);
				});

		}, 6000)


	}
}

export default CodeEditor;
