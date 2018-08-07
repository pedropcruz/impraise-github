import React, { Component } from 'react';

class LinkTag extends Component {
	render() {
		const classes = (this.props.className ? this.props.className : null)
		return (
			<a href={this.props.hyperlink}
				className={classes}
				rel="noreferrer noopener"
				target="_blank">{this.props.desc}</a>
		)
	}
}

export default LinkTag;