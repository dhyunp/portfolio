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
					<NavBar></NavBar>
						<div id="colorlib-main">
							<Introduction></Introduction>
							<About></About>
							<Skills></Skills>
							<Projects></Projects>
						</div>
				</div>
			</div>
		);
	}
}

export default App;
