import React, { Component } from 'react';
import './App.css';
import navBar from './components/navBar'
import introduction from './components/introduction'
import about from './components/about'
import skills from './components/skills'
import projects from './components/projects'

class App extends Component{
	render(){
		return (
			<div id="colorlib-page">
				<div id="colorlib-wrap">
					<navBar></navBar>
						<div id="colorlib-main">
							<intro></intro>
							<about></about>
							<skills></skills>
							<projects></projects>
						</div>
				</div>
			</div>
		);	
	}
}

export default App;
