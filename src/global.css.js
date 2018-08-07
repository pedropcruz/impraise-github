import { injectGlobal } from 'styled-components';
import vars from './variables.css';

injectGlobal`

	body{
		padding: 0;
		margin:4rem 0;
		background: ${vars.colors.bgColor};
		font-family: ${vars.fonts.AppleSystem};
	}

	.h2{
		color: ${vars.colors.black};
		font-size: ${vars.measures.bv4};
		font-weight: 400;
		margin: 0 0 ${vars.measures.bv7} 0;
	}
`;