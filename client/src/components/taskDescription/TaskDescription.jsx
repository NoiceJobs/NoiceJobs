import React, { Component } from "react";

class TaskDescription extends Component {

	render() {
		return (
			<div className='card task-description m-1'>
				<div className='card-header'>Task Description</div>
				<div className='card-body'>
					<h4 className={'text-success'}>{this.props.challenge.title}</h4>
					<hr />
					<p>{this.props.challenge.description}</p>
				</div>
			</div>
		);
	}
}

export default TaskDescription;
