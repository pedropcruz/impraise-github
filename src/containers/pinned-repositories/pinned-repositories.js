import React, { Component } from 'react';
import PinnedReposCSS from './pinned-repositories.css';
import RepoItem from '../../components/repo-item/repo-item';
import _ from 'lodash';

const API = "http://localhost:8000/pinned-repositories";

class PinnedRepos extends Component {
	constructor(props) {
		super(props);

		this.state = {
			repos: {}
		}
	}

	componentDidMount() {
		fetch(API)
			.then(res => res.json())
			.then(res => {
				const repos = res.pinnedRepositories.nodes;
				this.setState({
					repos
				})
			})
			.catch(error => console.log(error))
	}

	getRepositories() {

		const repos = this.state.repos;

		if (!_.isEmpty(repos)) {
			return _.map(repos, (value, item) => {
				return <RepoItem
					key={item}
					repoInfo={value}
					showUpdate={false}
					showForkFrom={false}
					showMIT={false}
				/>
			})
		}
	}

	render() {
		return (
			<PinnedReposCSS className="mt3 mb4">
				<h2 className="h2">Pinned repositories</h2>
				<div className="relative flex flex-row items-start justify-between">
					{this.getRepositories()}
				</div>
			</PinnedReposCSS>
		);
	}
}

export default PinnedRepos;