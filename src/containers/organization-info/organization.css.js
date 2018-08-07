import styled from 'styled-components';
import vars from '../../variables.css';

const OrganizationCSS = styled.section`
	font-family:${vars.fonts.AppleSystem};
	.textDetails{
		h1{
			font-weight: 400;
			color: ${vars.colors.blackColor};
		}
		span,a{
			font: 400 .9em/1.2em ${vars.fonts.AppleSystem};			
		}
		span,i{
			color: ${vars.colors.grayColor};
		}
		i{
			font-size: 18px;
		}
		a{
			color: ${vars.colors.linkColor};
			&:hover{
				opacity:.6;
				cursor: pointer;
			}
		}
	}
`;

export default OrganizationCSS;