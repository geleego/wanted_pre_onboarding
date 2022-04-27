import { useState } from 'react';
import styled from 'styled-components';

const TabStyled = styled.div`
	width: 480px;
	overflow: hidden;
	background-color: #fff;
	position: relative;
	display: flex;
	flex: none;
	align-items: center;

	&::before {
		position: absolute;
		right: 0;
		left: 0;
		border-bottom: 2px solid #ebebeb;
		content: '';
		bottom: 0;
	}

	& > button {
		width: 33.333%;
		float: left;
		border: none;
		outline: none;
		cursor: pointer;
		padding: 14px 0;
		transition: 0.3s;
		background: none;
		font-weight: 600;
		color: #aaa;
		text-align: center;

		&.active {
			color: #5e5e5e;
		}
		&:first-child.active ~ .slider {
			transform: translateX(0) scaleX(0.333);
		}
		&:nth-child(2).active ~ .slider {
			transform: translateX(33.333%) scaleX(0.333);
		}
		&:nth-child(3).active ~ .slider {
			transform: translateX(calc(33.333% * 2)) scaleX(0.333);
		}
	}

	& > .slider {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background-color: #10afaf;
		transform-origin: 0 0;
		transition: transform 0.3s; // 0.25s;
	}
`;

const title = ['감자', '고구마', '카레라이스'];

const Tab = () => {
	const [activeIndex, setActiveIndex] = useState(0); // eslint-disable-line no-unused-vars

	/**
	 * tab title click event
	 * @param {number} index
	 */
	const onClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<TabStyled>
			{title.map((section, index) => (
				<button className={activeIndex === index ? 'active' : ''} key={index} onClick={() => onClick(index)}>
					{section}
				</button>
			))}
			<span className='slider'></span>
		</TabStyled>
	);
};

export default Tab;
