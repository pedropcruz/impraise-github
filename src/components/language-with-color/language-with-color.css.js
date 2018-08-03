import styled from 'styled-components';
import vars from '../../variables.css';

const circleSize = "10px";

const LanguageWithColorCSS = styled.span`
	&:before{
		content: "";
		width: ${circleSize};
		height: ${circleSize};
		display: inline-block;
		vertical-align: middle;
		border-radius: 50%;
		background-color: ${props => props.color};
		margin-right: ${vars.measures.bv2}
	}
	p{
		display: inline-block;
		vertical-align:middle;
		margin: 0;
	}
`;

export default LanguageWithColorCSS;