import React, { Component } from 'react';
import MainCSS from './app.css';
import Organization from '../organization-info/organization';

class App extends Component{
	render(){
		return (
			<MainCSS className="max-width-4 mx-auto my4 px2 py2">
				<Organization />
			</MainCSS>
		);
	}
}

export default App;