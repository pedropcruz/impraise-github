const express = require('express');
const fetch = require('node-fetch');
const _ = require('lodash');
const expressGraphQL = require('express-graphql');
require('dotenv').load();

const app = express();

const NAME = "impraise"
const port = process.env.PORT_SERVER || 8080;

const url = "https://api.github.com/graphql";
const access_token = process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN;

app.use('/organization', (req, res) => {
	const query = `
		query ImpraiseGitHubAccount{
			organization(login: "${NAME}") {
				name
				location
				url
				websiteUrl
			}
		}
	`;

	fetch(url, {
		method: 'POST',
		body: JSON.stringify({ query }),
		headers: {
			'Authorization': `Bearer ${access_token}`
		}
	}).then(res => res.json())
		.then(body => res.send(body['data']))
		.catch(error => console.error(error));
});

app.use('/pinned-repositories', (req, res) => {
	const query = `
	query ImpraiseGitHubAccount($numberOfRepositories: Int){
		organization(login: "${NAME}") {
			pinnedRepositories(first: $numberOfRepositories, orderBy: {field: CREATED_AT, direction: DESC}) {
				nodes {
					isFork
					parent {
						forkCount
					}
					forks {
						totalCount
					}
					name
					description
					updatedAt
					primaryLanguage {
						color
						name
					}
					stargazers {
						totalCount
					}
					licenseInfo {
						name
					}
				}
			}
		}
	}
	`;

	fetch(url, {
		method: 'POST',
		body: JSON.stringify({ query }),
		headers: {
			'Authorization': `Bearer ${access_token}`
		}
	}).then(res => res.json())
		.then(body => res.send(body['data']['organization']))
		.catch(error => console.error(error));
});

app.use('/repositories', (req, res) => {
	const query = `
	query ImpraiseGitHubAccount($numberOfRepositories: Int){
		organization(login: "${NAME}") {
			repositories(first: $numberOfRepositories, orderBy: {field: CREATED_AT, direction: DESC}) {
				nodes {
					isFork
					parent {
						forkCount
					}
					forks {
						totalCount
					}
					name
					description
					updatedAt
					primaryLanguage {
						color
						name
					}
					stargazers {
						totalCount
					}
					licenseInfo {
						name
					}
				}
			}
		}
	}
	`;

	fetch(url, {
		method: 'POST',
		body: JSON.stringify({ query }),
		headers: {
			'Authorization': `Bearer ${access_token}`
		}
	}).then(res => res.json())
		.then(body => res.send(body['data']['organization']))
		.catch(error => console.error(error));
});

app.listen(port, () => {
	console.log(`Start listening server on http://localhost:${port}`);
})