import React, { Component } from "react";
import './TaskDescription.css'
import {Col, Row} from "react-bootstrap";
import {UnControlled as CodeMirror} from "react-codemirror2";

class TaskDescription extends Component {
    componentDidMount() {
        this.getData()
    }

    state={

    }

    getData(){
        this.setState({
            challenge: this.props.challenge
        })
    }
  render() {

    return (
      <div className="card task-description m-1" >
          {this.getData}
        <div className="card-header bg-info text-light font-weight-bold">Task Description</div>
        <div className="card-body">
          <h4 className={"text-info"}>{this.props.challenge.title}</h4>
          <hr className={'delimiter-descr'}/>
          <p>{this.props.challenge.description}</p>
            <hr className={'delimiter-descr'}/>
            <Row>
                <Col xs={6}  style={{backgroundColor:'#F7F7F7'}} className={'pb-3'}>
                    <pre className={'text-info font-weight-bold'}>Output: </pre>
                    <code className={'text-dark'}>
                        {this.props.challenge.input}
                    </code>
                </Col>
                <Col xs={6} style={{backgroundColor:'#D0F1E1'}} className={'pb-3'}>
                    <pre className={'text-info font-weight-bold'}>Input: </pre>
                    <code className={'text-dark'}>
                        {this.props.challenge.output}
                    </code>

                </Col>
            </Row>
        </div>
      </div>
    );
  }
}

export default TaskDescription;
