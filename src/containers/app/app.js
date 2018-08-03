import React, { Component } from 'react';
import MainCSS from './app.css';
import Organization from '../organization-info/organization';
import PinnedRepos from '../pinned-repositories/pinned-repositories';

class App extends Component{
	render(){
		return (
			<MainCSS className="max-width-4 mx-auto my4 px3 py2">
				<Organization />
				<PinnedRepos />
			</MainCSS>
		);
	}
}

export default App;