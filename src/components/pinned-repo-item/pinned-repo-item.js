import React, { Component } from 'react';
import _ from 'lodash';
import Title from '../title/title';
import LanguageWithColor from '../language-with-color/language-with-color';
import DescWithIcon from '../desc-with-icon/desc-with-icon';

class PinnedRepoItem extends Component {

	render() {
		const { name, description, url, primaryLanguage, isFork, forks, stargazers } = this.props.repoInfo;
		return (
			<a className="pinnedBox col-4 mx2 py1 px2" href={url} rel="noreferrer noopener" target="_blank">
				<div className="wrapper">
					<Title classes="title" title={name} />
					<p className="text">{description}</p>
					<div className="flex items-center iconsDetails flex absolute bottom-0 py2">
						<LanguageWithColor
							classes="language"
							languageName={primaryLanguage.name}
							color={primaryLanguage.color}
						/>
						{!_.isEmpty(stargazers) && stargazers.totalCount !== 0 ?
							<DescWithIconComponent icon="star" desc={stargazers.totalCount} />
							:
							null
						}
						{!isFork && forks.totalCount !== 0 ?
							<DescWithIconComponent icon="git-branch" desc={forks.totalCount} />
							:
							null
						}
					</div>
				</div>
			</a>
		);
	}
}

class DescWithIconComponent extends Component {
	render() {
		return (
			<DescWithIcon icon={this.props.icon} desc={this.props.desc} />
		);
	}
}

export default PinnedRepoItem;