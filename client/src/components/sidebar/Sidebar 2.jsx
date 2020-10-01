import React, { Component } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";

export default class Sidebar extends Component {
	render() {
		return (
			<div>
				<div class='sidebar'>
					<ul class='sidebar-nav'>
						<li class='logo'>
							<Link to='/dashboard/' class='side-link'>
								<span class='link-text logo-text'>NoiceJobs</span>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fad'
									data-icon='angle-double-right'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 448 512'
									class='svg-inline--fa fa-angle-double-right fa-w-14 fa-5x'
								>
									<g class='fa-group'>
										<path
											fill='currentColor'
											d='M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z'
											class='fa-secondary'
										></path>
										<path
											fill='currentColor'
											d='M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z'
											class='fa-primary'
										></path>
									</g>
								</svg>
							</Link>
						</li>
						<li class='side-item'>
							<Link to='/dashboard/' class='side-link'>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fas'
									data-icon='chart-pie'
									class='svg-inline--fa fa-chart-pie fa-w-17'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 544 512'
								>
									<g>
										<path
											class='fa-primary'
											fill='currentColor'
											d='M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z'
										></path>
									</g>
								</svg>
								<span class='link-text'>Dashboard</span>
							</Link>
						</li>

						<li class='side-item'>
							<Link to='/jobs' class='side-link'>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fas'
									data-icon='briefcase'
									class='svg-inline--fa fa-briefcase fa-w-16'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'
								>
									<g>
										<path
											class='fa-primary'
											fill='currentColor'
											d='M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z'
										></path>
									</g>
								</svg>
								<span class='link-text'>Jobs</span>
							</Link>
						</li>
						<li class='side-item'>
							<Link to='/company' class='side-link'>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fas'
									data-icon='building'
									class='svg-inline--fa fa-building fa-w-14'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 448 512'
								>
									<g>
										<path
											class='fa-primary'
											fill='currentColor'
											d='M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z'
										></path>
									</g>
								</svg>
								<span class='link-text'>Company</span>
							</Link>
						</li>
						<li class='side-item'>
							<Link to='/application' class='side-link'>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fas'
									data-icon='file-alt'
									class='svg-inline--fa fa-file-alt fa-w-12'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 384 512'
								>
									<g>
										<path
											class='fa-primary'
											fill='currentColor'
											d='M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z'
										></path>
									</g>
								</svg>
								<span class='link-text'>Application</span>
							</Link>
						</li>
						<li class='side-item'>
							<Link to='/settings/' class='side-link'>
								<svg
									aria-hidden='true'
									focusable='false'
									data-prefix='fas'
									data-icon='cog'
									class='svg-inline--fa fa-cog fa-w-16'
									role='img'
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 512 512'
								>
									<g class='fa-group'>
										<path
											class='fa-primary'
											fill='currentColor'
											d='M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z'
										></path>
									</g>
								</svg>
								<span class='link-text'>Setting</span>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
