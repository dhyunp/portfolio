import React, { Component } from 'react';

export default class About extends Component{
	render() {
		return (
			<div>
				<section className="colorlib-about" data-section="about">
					<div className="colorlib-narrow-content">
					  <div className="row">
						<div className="col-md-12">
						  <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
							<div className="col-md-12">
							  <div className="about-desc">
								<span className="heading-meta">About Me</span>
								<h2 className="colorlib-heading">Who Am I?</h2>
								<p>
									Hello, I am Donghyun Park and I am currently a rising senior at The Cooper Union majoring in Electrical Computer Engineering. I expect to graduate in the Spring (May) of 2021.
								</p>
								<p>
									I created this website as a portfolio for my personal and academic projects, as well as to gain more experience in full stack developing.<br/>
									The more I learn, the more I realize the depth of what I still have yet to learn, and the amount of potential that I see excites me!
								</p>
							  </div>
							</div>
						  </div>
						</div>
					  </div>
					</div>
				</section>
			</div>
		)
	}
}
