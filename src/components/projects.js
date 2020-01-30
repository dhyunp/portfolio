import React, { Component } from 'react';

export default class Projects extends Component{
	render() {
		return (
			<div>
				<section className="colorlib-projects" data-section="projects">
					<div className="colorlib-narrow-content">
					  <div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
						  <span className="heading-meta">My Projects</span>
						  <h2 className="colorlib-heading animate-box">Project Experiences</h2>
						</div>
					  </div>
					  <div className="row">
						<div className="col-md-12">
						  <div className="timeline-centered">
							<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
							  <div className="timeline-entry-inner">
								<div className="timeline-icon color-1">
								  <i className="icon-pen2" />
								</div>
								<div className="timeline-label">
								  <h2><a href="https://github.com/dhyunpark/reactTut-Website" target="_blank" rel="noopener noreferrer">Personal Portfolio Website</a> <span>2020</span></h2>
								  <p>Created a custom, personalized portfolio website(this very one, in fact) for showcasing my projects from the ground up in a full stack using ReactJS and Github Pages.</p>
								</div>
							  </div>
							</article>
							<article className="timeline-entry animate-box" data-animate-effect="fadeInRight">
							  <div className="timeline-entry-inner">
								<div className="timeline-icon color-5">
								  <i className="icon-pen2" />
								</div>
								<div className="timeline-label">
								  <h2><a href="https://github.com/jbentivegna15/TIED" target="_blank" rel="noopener noreferrer">TIED, A Public Event Planning Platform</a> <span>2018</span></h2>
								  <p>Developed a fully functioning web service using a MERN stack in a collaborative team environment. The platform allowed users to plan public events, interact and invite other users. I focused largely on using using React and Node.js for the front-end, and got experience using Express and MongoDB for the back-end.</p>
								</div>
							  </div>
							</article>
							<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
							  <div className="timeline-entry-inner">
								<div className="timeline-icon color-2">
								  <i className="icon-pen2" />
								</div>
								<div className="timeline-label">
								  <h2><a href="https://github.com/dhyunpark/nlp-ece467" target="_blank" rel="noopener noreferrer">Part-of-Speech Tagger using N-grams, NLP</a> <span>2018</span></h2>
								  <p>Coded a program (Python) to train and test on a large body of text in order to determine each word’s part of speech in grammar. Incorporated Viterbi Algorithm and Hidden Markov Model to improve accuracy.</p>
								</div>
							  </div>
							</article>
							<article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
							  <div className="timeline-entry-inner">
								<div className="timeline-icon color-4">
								  <i className="icon-pen2" />
								</div>
								<div className="timeline-label">
								  <h2><a href="https://github.com/dhyunpark/ai-ece469/tree/master/Project%201%20Othello/src" target="_blank" rel="noopener noreferrer">Othello AI using A* Algorithm</a> <span>2017</span></h2>
								  <p>Designed and created an ascii shell terminal-based game of Othello that allowed the player to play against an adversarial AI that integrated A* heuristics. Users could customize the difficulty of the AI by giving different constraints on the AI's search depth.</p>
								</div>
							  </div>
							</article>
							<article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
							  <div className="timeline-entry-inner">
								<div className="timeline-icon color-3">
								  <i className="icon-pen2" />
								</div>
								<div className="timeline-label">
								  <h2>CPU Architecture / Microprocessor Design <span>2017</span></h2>
								  <p>Constructed an Arithmetic Logic Unit (ALU) using logic IC chips on breadboards. Expanded the ALU into a microprocessor based on the Intel 4040 using more IC chips.</p>
								</div>
							  </div>
							</article>
						  </div>
						</div>
					  </div>
					</div>
				</section>
			</div>
		)
	}
}
