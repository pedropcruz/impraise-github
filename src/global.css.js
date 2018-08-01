import { injectGlobal } from 'styled-components';
import vars from './variables.css';

injectGlobal`

	body{
		margin: 0;
		background: ${vars.colors.bgColor};
		font-family: ${vars.fonts.AppleSystem};
	}

`;