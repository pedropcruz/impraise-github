import React, { Component } from 'react';
import Logo from '../../img/logo.png';
import OrganizationCSS from './organization.css';
import DescWithIcon from '../../components/desc-with-icon/desc-with-icon';

class Organization extends Component {
	render() {
		return (
			<OrganizationCSS className="relative mb2">
				<div className="flex items-center">
					<div className="col-2">
						<figure className="m0 py2 px2">
							<picture>
								<img src={Logo} alt="" className="fit block" />
							</picture>
						</figure>
					</div>
					<div className="col-10 textDetails ml2">
						<h1 className="h1 mt0 mb2">Impraise</h1>
							<DescWithIcon icon="location" desc="Amsterdarm/NewYork/Lisbon" classes="inline-block my1"/>
							<DescWithIcon icon="link" link="https://www.impraise.com" desc="https://www.impraise.com" />
					</div>
				</div>
			</OrganizationCSS>
		);
	}
}

export default Organization;