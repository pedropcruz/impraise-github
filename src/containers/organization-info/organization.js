import React, { Component } from 'react';
import Logo from '../../img/logo.png';
import OrganizationCSS from './organization.css';
import DescWithIcon from '../../components/desc-with-icon/desc-with-icon';

const API = "http://localhost:8000/organization";

class Organization extends Component {
	constructor(props) {
		super(props);

		this.state = {
			organization: {},
			isLoading: false,
			error: null
		}
	}
	componentDidMount() {

		this.setState({
			isLoading: true
		});

		fetch(API)
			.then(res => res.json())
			.then(res => this.setState({ organization: res.organization, isLoading: false }))
			.catch(error => this.setState({ error, isLoading: false }));
	}


	render() {
		const { name, location, websiteUrl, isLoading, error } = this.state.organization;

		if (error) {
			return <p>{error.message}</p>
		}

		if (isLoading) {
			return <p>Loading...</p>
		}

		return (
			<OrganizationCSS className="relative mb2">
				<div className="flex items-center">
					<div className="col-2">
						<figure className="m0 py2 pr2">
							<picture>
								<img src={Logo} alt="" className="fit block" />
							</picture>
						</figure>
					</div>
					<div className="col-10 textDetails ml2">
						<h1 className="h1 mt0 mb1">{name}</h1>
						<DescWithIcon icon="location" desc={location} classes="inline-block" />
						<DescWithIcon icon="link" link={websiteUrl} desc={websiteUrl} />
					</div>
				</div>
			</OrganizationCSS>
		);
	}
}

export default Organization;