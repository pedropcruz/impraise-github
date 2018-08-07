import React, { Component } from 'react';
import _ from 'lodash';


class DropdownMenu extends Component {

	renderOptions(options) {
		return _.map(options, (value, key) => {
			return (
			<span key={key}>
				<input type="checkbox" id={value} name={value} />
				<label htmlFor={value}>{value}</label>
			</span>);
		})
	}

	render() {
		const classes = (this.props.classes ? this.props.classes :  null)
		return (
			<details className={classes}>
				<summary>{this.props.label}</summary>
				<div className="dropdown-menu">
					{this.renderOptions(this.props.options)}
				</div>
			</details>
		);
	}
}

export default DropdownMenu