import React, {Component} from 'react';

class LinkTag extends Component{
	render(){
		return(
			<a href={this.props.hyperlink} >{this.props.desc}</a>
		)
	}
}

export default LinkTag;