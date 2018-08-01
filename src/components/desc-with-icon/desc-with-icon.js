import React, { Component } from 'react';
import LinkTag from '../A/link-tag';

class DescWithIcon extends Component {

	renderIcon(desc) {
		return (<i className={`icon icon-${this.props.icon}`}></i>);
	}

	render() {
		return (
			<div className="block description">
				{this.renderIcon()}
				{this.props.link ?
					<a href={this.props.link}>{this.props.desc}</a>
					:
					<p className={(this.props.classes ? this.props.classes : "")} >{this.props.desc}</p>
				}
			</div>
		);
	}
}

export default DescWithIcon;