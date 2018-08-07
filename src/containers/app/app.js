import React, { Component } from 'react';
import MainCSS from './app.css';
import Organization from '../organization-info/organization';
import PinnedRepos from '../pinned-repositories/pinned-repositories';
import Repositories from '../repositories/repositories';

class App extends Component{
	render(){
		return (
			<MainCSS className="max-width-4 mx-auto my4 px3 pt2 pb0">
				<Organization />
				<PinnedRepos />
				<Repositories />
			</MainCSS>
		);
	}
}

export default App;