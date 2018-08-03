import styled from 'styled-components';
import vars from '../../variables.css';

const PinnedRepos = styled.section`
	.h2{
		color: ${vars.colors.black};
		font-size: ${vars.measures.bv4};
		font-weight: 400;
		margin: 0 0 ${vars.measures.bv7} 0;
	}
	.pinnedBox{
		text-decoration: none;
		color: inherit;
		position:relative;
		border: 1px #e1e4e8 solid;
		border-radius: ${vars.measures.bv0};
		height: 175px;
		&:first-child{
			margin-left:0;
		}
		&:last-child{
			margin-right: 0;
		}
		&:hover{
			background: ${vars.colors.grayColorHover};
			cursor: pointer;
		}
		.title, .text{
			font-size: 14px;
			font-weight: 400;
			color: ${vars.colors.primaryColor};
		}
		.iconsDetails{
			font-size: ${vars.measures.bv2};
			line-height: ${vars.measures.bv3};
			color: ${vars.colors.primaryColor};
			.description{
				display: flex;
				margin-left:${vars.measures.bv3};
				&:first-child{
					margin: 0;
				}
				i{
					font-size: 14px;
				}
				p{
					margin: 0 0 0 ${vars.measures.bv0};
				}
			}
		}
	}

`;

export default PinnedRepos;