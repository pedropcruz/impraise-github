import React, { Component } from 'react';
import LinkTag from '../A/link-tag';

class DescWithIcon extends Component {

	renderIcon() {
		return (<i className={`icon icon-${this.props.icon}`}></i>);
	}

	render() {
		return (
			<div className="description">
				{this.renderIcon()}
				{this.props.link ?
					<LinkTag hyperlink={this.props.link} desc={this.props.desc}/>
					:
					<span className={(this.props.classes ? this.props.classes : "")} >{this.props.desc}</span>
				}
			</div>
		);
	}
}

export default DescWithIcon;