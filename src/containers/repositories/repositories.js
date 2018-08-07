import React, { Component } from 'react';
import RepositoriesCSS from './repositories.css';
import DropdownMenu from '../../components/dropdown-menu/dropdown-menu';
import _ from 'lodash';
import RepoItem from '../../components/repo-item/repo-item';

const API = "http://localhost:8000/repositories";
const types = ['Sources', 'Forks', 'Archived', 'Mirrors'];

class Repositories extends Component {

	constructor(props) {
		super(props);

		this.state = {
			repos: {},
			languages: [],
		}
	}

	componentDidMount() {
		fetch(API)
			.then(res => res.json())
			.then(res => {
				const repos = res.repositories.nodes;

				const languages = _.compact(_.uniqBy(_.map(repos, value => {
					return (!_.isEmpty(value.primaryLanguage) ? value.primaryLanguage.name : null);
				}), value => value));

				this.setState({
					repos,
					languages
				})
			})
			.catch(error => console.log(error))
	}

	renderRepositories(){
		const repos = this.state.repos;

		if (!_.isEmpty(repos)) {
			return _.map(repos, (value, item) => {
				return <RepoItem
					key={item}
					repoInfo={value}
					showUpdate={true}
					showForkFrom={true}
					showMIT={true}
				/>
			})
		}
	}

	render() {
		return (
			<RepositoriesCSS>
				<div className="flex justify-between items-center mb3">
					<h2 className="h2 inline-block">Repositories</h2>
					<div className="filters flex items-center justify-end">
						<h4 className="h4 inline-block m0">Filter</h4>
						<DropdownMenu classes="ml3 relative" label="Type" options={types} />
						<DropdownMenu classes="ml2 relative" label="Language" options={this.state.languages} />
					</div>
				</div>
				{this.renderRepositories()}
			</RepositoriesCSS>
		);
	}
}

export default Repositories