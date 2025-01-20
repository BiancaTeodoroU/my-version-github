import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Loading = styled.div`
	color: #FFF;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const Container = styled.div`
  max-width: 43.75rem;
	background: #FFF;
	border-radius: .25rem;
	box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.2);
	padding: 1.875rem;
	margin: 5rem auto;
`;

export const Owner = styled.div`
  display: flex;
	align-items: center;
	flex-direction: column;

	img {
		width: 9.375rem;
		border-radius: 20%;
		margin: 1.25rem 0;
	}

	h1 {
		font-size: 1.875rem;
		color: #0D2636;
	}

	p {
		margin-top: .3125rem;
		font-size: .875rem;
		color: #000;
		text-align: center;
		line-height: .0875rem;
		max-width: 400px;
	}
`;

export const BackButton = styled(Link)`
	border: 0;
	outline: 0;
	background: transparent;
`;

export const IssuesList = styled.ul`
	margin-top: 1.875rem;
	padding-top: 1.875rem;
	border-top: 1px solid #eee;
	list-style: none;

	li {
		display: flex;
		padding: .9375rem .625rem;

		& + li {
			margin-top: .75rem;
		}

		img {
			width: 2.25rem;
			height: 2.25rem;
			border-radius: 50%;
			border: .125rem solid #0D2636;
		}

		div {
			flex: 1;
			margin-left: .75rem;

			p {
				margin-top: .625rem;
				font-size: .75rem;
				color: #000;
			}
		}

		strong {
			font-size: .9375rem;

			a {
				line-height: 1.5rem;
				text-decoration: none;
				color: #222;

				&:hover {
					color: #0071db;
				}
			}

			span {
				background: #222;
				color: #FFF;
				border-radius: .25rem;
				font-size: .75rem;
				font-weight: 600;
				padding: .3125rem;
				margin-left: .625rem;
			}
		}
	}
`;

export const PageActions = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	button {
		outline: 0;
		border: 0;
		background: #222;
		color: #FFF;
		padding: .3125rem .625rem;
		border-radius: .25rem;

		&:disabled {
			cursor: not-allowed;
			opacity: 0.5;
		}
	}
`;

export const FilterList = styled.div`
	margin: .9375rem 0;

	button {
		outline: 0;
		border: 0;
		padding: .5rem;
		border-radius: .25rem;
		margin: 0 .1875rem;

		&:nth-child(${props => props.active + 1}) {
			background: #0071db;
			color: #FFF;
		}
	}
`;