import React, { Component } from 'react';

class Title extends Component{
	render(){

		const classes = (this.props.classes ? this.props.classes + " title" : "")

		return(
			<React.Fragment>
				<h1 className={classes}>{this.props.title}</h1>
			</React.Fragment>
		);
	}
}

export default Title;