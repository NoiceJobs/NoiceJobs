import React, { Component } from "react";

class TaskBar extends Component {
	render() {
		return (
			<div>
				<a className='btn btn-outline-danger' href=''>
					Previous
				</a>
				<span className='ml-5 mr-5'>Task</span>
				<a className='btn btn-outline-success' href=''>
					Next
				</a>
			</div>
		);
	}
}

export default TaskBar;
