import React, { Component } from 'react';
import LinkTag from '../A/link-tag';

class DescWithIcon extends Component {

	renderIcon() {
		return (<i className={`icon icon-${this.props.icon}`}></i>);
	}

	render() {
		return (
			<div className="block description">
				{this.renderIcon()}
				{this.props.link ?
					<LinkTag hyperlink={this.props.link} desc={this.props.desc}/>
					:
					<p className={(this.props.classes ? this.props.classes : "")} >{this.props.desc}</p>
				}
			</div>
		);
	}
}

export default DescWithIcon;