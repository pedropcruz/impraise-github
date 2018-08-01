import React, { Component } from 'react';
import MainCSS from './app.css';

class App extends Component{
	render(){
		return (
			<MainCSS className="max-width-4 mx-auto my4">
				Hello World!
			</MainCSS>
		);
	}
}

export default App;