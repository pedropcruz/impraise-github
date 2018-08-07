import React, { Component } from 'react';
import _ from 'lodash';
import Title from '../title/title';
import LanguageWithColor from '../language-with-color/language-with-color';
import DescWithIcon from '../desc-with-icon/desc-with-icon';
import LinkTag from '../A/link-tag';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dez'];

class RepoItem extends Component {

	renderUpdateAt(date) {
		const newDate = new Date(date);
		return <p className="block">Update on {newDate.getDate()} {MONTHS[newDate.getMonth()]} {newDate.getFullYear()}</p>
	}

	renderForkRepo(isFork, forks, parent) {
		if (isFork && parent.forkCount !== 0) {
			return <DescWithIcon icon="git-branch" desc={parent.forkCount} />
		} else if (!isFork && forks.totalCount !== 0) {
			return <DescWithIcon icon="git-branch" desc={forks.totalCount} />
		}
	}

	renderForkParent(parent, showForkFrom) {
		if (!_.isEmpty(parent) && showForkFrom) {
			return (
				<h6 className="isForkedBy">Forked from
					<LinkTag hyperlink={parent.url} className="relative forkLink" desc={parent.nameWithOwner} />
				</h6>
			);
		}
	}

	renderPrimaryLanguage(primaryLanguage) {
		if (!_.isEmpty(primaryLanguage)) {
			return (
				<LanguageWithColor
					classes="language"
					languageName={(!_.isEmpty(primaryLanguage.name) ? primaryLanguage.name : null)}
					color={(!_.isEmpty(primaryLanguage.color) ? primaryLanguage.color : null)}
				/>
			);
		}
	}

	renderStarsFromRepo(stars) {
		if (!_.isEmpty(stars) && stars.totalCount !== 0) {
			return <DescWithIcon icon="star" desc={stars.totalCount} />
		}
	}

	renderMIT(license) {
		if (!_.isEmpty(license)) {
			return <DescWithIcon icon="law" desc={license.spdxId} />
		}
	}

	render() {
		const { name,
			description,
			url,
			updatedAt,
			primaryLanguage,
			isFork,
			forks,
			stargazers,
			parent,
			licenseInfo } = this.props.repoInfo;

		return (
			<div className="relative repositoryBox col-4 mx2 py1 px2">
				<div className="wrapper">
					<Title classes="title" title={name} />
					{this.renderForkParent(parent, this.props.showForkFrom)}
					<p className="text">{description}</p>
					<div className="flex items-center iconsDetails flex absolute bottom-0 py2">
						{this.renderPrimaryLanguage(primaryLanguage)}
						{this.renderStarsFromRepo(stargazers)}
						{this.renderForkRepo(isFork, forks, parent)}
						{(this.props.showMIT) ? this.renderMIT(licenseInfo) : null}
						{(this.props.showUpdate) ? this.renderUpdateAt(updatedAt) : null}
					</div>
				</div>
				<LinkTag className="absolute top-0 bottom-0 left-0 right-0 repoLink" hyperlink={url} />
			</div>
		);
	}
}

export default RepoItem