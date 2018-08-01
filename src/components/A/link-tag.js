import React, {Component} from 'react';

class LinkTag extends Component{
	render(){
		return(
			<a href={this.props.hyperlink} rel="noreferrer noopener" target="_blank">{this.props.desc}</a>
		)
	}
}

export default LinkTag;