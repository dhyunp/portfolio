import React, { Component } from 'react';

export default class Intro extends Component{
	render() {
		return (
			<div>
				<section id="colorlib-hero" className="js-fullheight" data-section="home">
					<div className="flexslider js-fullheight">
					  <ul className="slides">
						<li style={{backgroundImage: 'url(images/img_bg_1.jpg)'}}>
						  <div className="overlay" />
						  <div className="container-fluid">
							<div className="row">
							  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
								<div className="slider-text-inner js-fullheight">
								  <div className="desc">
									<h1>Welcome to<br />Donghyun Park's Portfolio</h1>
									<p><a className="btn btn-primary btn-learn" href="https://docs.google.com/document/d/1If8BV9L2f382v_Ldr40Tls-oO8CcFQrq9p8MkQYqT90/edit?usp=sharing" target="_blank" rel="noopener noreferrer">View CV/Resume<i className="icon-download4" /></a></p>
								  </div>
								</div>
							  </div>
							</div>
						  </div>
						</li>
						<li style={{backgroundImage: 'url(images/img_bg_2.jpg)'}}>
						  <div className="overlay" />
						  <div className="container-fluid">
							<div className="row">
							  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
								<div className="slider-text-inner">
								  <div className="desc">
									<h1>View My<br />Github Repository</h1>
									<p><a className="btn btn-primary btn-learn" href="https://github.com/dhyunpark" target="_blank" rel="noopener noreferrer">View Repository<i className="icon-download4" /></a></p>
								  </div>
								</div>
							  </div>
							</div>
						  </div>
						</li>
					  </ul>
					</div>
				</section>
			</div>
		)
	}
}
