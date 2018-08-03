import React, { Component } from 'react';
import LanguageWithColorCSS from './language-with-color.css';

class LanguageWithColor extends Component {
	render(){
		return(
			<React.Fragment>
				<LanguageWithColorCSS color={this.props.color} className="inline-block"><p>{this.props.languageName}</p></LanguageWithColorCSS>
			</React.Fragment>
		);
	}
}

export default LanguageWithColor;