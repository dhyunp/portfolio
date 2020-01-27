import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navBar'
import Introduction from './components/introduction'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'

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
