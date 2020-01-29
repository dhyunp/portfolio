import React, { Component } from 'react';

export default class Skills extends Component{
	render() {
		return (
			<div>
				<section className="colorlib-skills" data-section="skills">
					<div className="colorlib-narrow-content">
					  <div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
						  <span className="heading-meta">My Skills</span>
						  <h2 className="colorlib-heading">Here are some of my fields of knowledge</h2>
						</div>
					  </div>
					  <div className="row row-pt-md">
						<div className="col-md-4 text-center animate-box">
						  <div className="skills color-5">
							<span className="icon">
							  <i className="icon-data" />
							</span>
							<div className="desc">
							  <h3>Full Stack Development</h3>
							  <p>Experience developing full stack applications in both individual and team environments</p>
							</div>
						  </div>
						</div>
						<div className="col-md-4 text-center animate-box">
						  <div className="skills color-3">
							<span className="icon">
							  <i className="icon-monitor" />
							</span>
							<div className="desc">
							  <h3>Operating Systems</h3>
							  <p>Familiar with Windows/Unix OS with an understanding of low-level mechanisms of Unix</p>
							</div>
						  </div>
						</div>
						<div className="col-md-4 text-center animate-box">
						  <div className="skills color-2">
							<span className="icon">
							  <i className="icon-cloud-upload2" />
							</span>
							<div className="desc">
							  <h3>AI & NLP</h3>
							  <p>Completed functional programs such as an A* implementation of Othello (AI) as well Parts-of-Speech Tagging (NLP)</p>
							</div>
						  </div>
						</div>

						{/*
						<div className="col-md-4 text-center animate-box">
						  <div className="skills color-4">
							<span className="icon">
							  <i className="icon-layers2" />
							</span>
							<div className="desc">
							  <h3>Graphic Design</h3>
							  <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
							</div>
						  </div>
						</div>

						<div className="col-md-4 text-center animate-box">
						  <div className="skills color-5">
							<span className="icon">
							  <i className="icon-data" />
							</span>
							<div className="desc">
							  <h3>Software</h3>
							  <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
							</div>
						  </div>
						</div>

						<div className="col-md-4 text-center animate-box">
						  <div className="skills color-6">
							<span className="icon">
							  <i className="icon-phone3" />
							</span>
							<div className="desc">
							  <h3>Application</h3>
							  <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
							</div>
						  </div>
						</div>
						*/}

					  </div>
					</div>
				</section>
			</div>
		)
	}
}
