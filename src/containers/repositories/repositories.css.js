import styled from 'styled-components';
import vars from '../../variables.css';

const RepositoriesCSS = styled.section`
	.h2{
		margin: 0;
	}
	details summary::-webkit-details-marker {
  	display:none;
	}
	.filters{
		h4, 
		details summary{
			color: ${vars.colors.blackColor};
			font: 400 ${vars.measures.bv3}/${vars.measures.bv4} ${vars.fonts.AppleSystem};
		}
		details summary{
			padding: ${vars.measures.bv1} ${vars.measures.bv2};
			border: 1px solid ${vars.colors.borderColor};
			border-radius: ${vars.measures.bv0};
		}
		.dropdown-menu{
			position: absolute;
			width: 140px;
			background: ${vars.colors.whiteColor};
			padding: ${vars.measures.bv3} ${vars.measures.bv3};
			z-index: 2;
			top: 52px;
			border: 1px solid ${vars.colors.borderColor};
			border-radius: ${vars.measures.bv0};
			box-shadow: 0px 2px 10px rgba(0,0,0,.2);
			&:before{
				content: " ";
				position: absolute;
				width:${vars.measures.bv3};
				height:${vars.measures.bv3};
				background: ${vars.colors.whiteColor};
				border-top: 1px solid ${vars.colors.borderColor};
				border-left: 1px solid ${vars.colors.borderColor};
				top: -${vars.measures.bv1};
				left: ${vars.measures.bv4};
				transform:rotate(45deg);
			}
			span{
				position: relative;
				display: block;
				width: 100%;
				height: ${vars.measures.bv6};
				input{
					font-size: ${vars.measures.bv3};
					float: right;
					&[type="checkbox"]{
						border:0;
						clip: rect(0,0,0,0);
						height: 1px;
						width: 1px;
						margin: -1px;
						overflow: hidden;
						padding: 0;
						position: absolute;
					}
				}
				label{
					float: left;
					&:before{
						content: "";
						position: absolute;
						right: 0;
						display: block;
						width: ${vars.measures.bv3};
						height: ${vars.measures.bv3};
						background: transparent;
					}
					&:after{

					}
				}
			}
		}
	}
	.repositoryBox{
		width: auto;
		margin: 0 -${vars.measures.bv7};
		display: block;
		border-top: 1px solid ${vars.colors.borderColor};
		background: transparent;
		> .wrapper{
			padding: 0 ${vars.measures.bv3};
		}
		&:hover{
			background: ${vars.colors.grayColorHover};
		}
		.title{
			color: ${vars.colors.secondaryColor};
			font: 400 ${vars.measures.bv4}/${vars.measures.bv3} ${vars.fonts.AppleSystem};
			margin:${vars.measures.bv3} 0 ${vars.measures.bv1} 0;
		}
		.isForkedBy{
			color: ${vars.colors.grayColor};
			font: 200 ${vars.measures.bv2}/${vars.measures.bv3} ${vars.fonts.AppleSystem};
			margin:0;
			a{
				text-decoration: none;
				color: inherit;
				&:hover{
					text-decoration:underline;
					color: ${vars.colors.linkColor};
				}
			}
		}
		.text{
			width: 60%;
			font: 200 ${vars.measures.bv3}/${vars.measures.bv5} ${vars.fonts.AppleSystem};
		}
		.iconsDetails{
			position: relative;
			font-size: ${vars.measures.bv2};
			line-height: ${vars.measures.bv3};
			color: ${vars.colors.primaryColor};
			padding:${vars.measures.bv2} 0;
			.description{
				display: flex;
				margin-left:${vars.measures.bv3};
				&:first-child{
					margin: 0;
				}
				i{
					font-size: ${vars.measures.bv3};
				}
			}
			p.block{
				margin: 0 0 0 ${vars.measures.bv2};
			}
		}
		.forkLink{
			left: ${vars.measures.bv0};
			z-index: 2;
		}
	}
`;

export default RepositoriesCSS