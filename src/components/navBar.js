import React, { Component } from 'react';

export default class NavBar extends Component{
	render() {
		return (
			<div>
				<aside id="colorlib-aside" role="complementary" className="border js-fullheight">
					<div className="text-center">
					  <div className="author-img" style={{backgroundImage: 'url(images/blog-1.jpg)'}} />
					  <h1 id="colorlib-logo"><a href="index.html">Donghyun Park</a></h1>
					  <span className="position">Full Stack Developer</span>
					</div>
					<nav id="colorlib-main-menu" role="navigation" className="navbar">
					  <div id="navbar" className="collapse">
						<ul>
						  <li className="active"><a href="home" data-nav-section="home">Home</a></li>
						  <li><a href="about" data-nav-section="about">About</a></li>
						  <li><a href="skills" data-nav-section="skills">Skills</a></li>
						  <li><a href="projects" data-nav-section="projects">Projects</a></li>
						</ul>
					  </div>
					</nav>
					<nav id="colorlib-main-menu">
					  <ul>
						<li>
							<a href="https://github.com/dhyunpark" target="_blank" rel="noopener noreferrer"><i className="icon-social-github" /></a> 
							<a href="https://www.linkedin.com/in/dhyunpark/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin22" /></a>
						</li>
					  </ul>
					</nav>
				</aside>
			</div>
		)
	}
}
