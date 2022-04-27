import { useState } from 'react';
import styled from 'styled-components';

const ToggleStyled = styled.div`
	width: 400px;
	height: 42px;
	overflow: hidden;
	background-color: #ebebeb;
	border-radius: 50px;
	position: relative;
	display: flex;
	flex: none;
	align-items: center;

	& > button {
		// add
		position: relative;
		z-index: 2;

		width: 50%;
		float: left;
		border: none;
		outline: none;
		cursor: pointer;
		padding: 14px 0; // 14px 76px
		transition: 0.3s;
		// font-size: 15px;
		background: none;
		font-weight: 600;
		color: #aaa;
		text-align: center;

		&.active {
			color: #5e5e5e;
		}

		&:first-child.active ~ .slider {
			transform: translateX(50%);
		}
		&:nth-child(2) ~ .slider {
			transform: translateX(155%);
		}
	}

	& > .slider {
		width: 190px;
		height: 33px;
		background: #fdfdfd;
		border-radius: 20px;
		position: absolute;
		top: 4px;
		left: -90px;
		transition: transform 0.3s;
	}
`;

const title = ['기본', '상세'];

const Toggle = () => {
	const [activeIndex, setActiveIndex] = useState(0); // eslint-disable-line no-unused-vars

	/**
	 * toggle button click event
	 * @param {number} index
	 */
	const onClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<>
			<ToggleStyled>
				{title.map((radio, index) => (
					<button className={activeIndex === index ? 'active' : ''} key={index} onClick={() => onClick(index)}>
						{radio}
					</button>
				))}

				<span className='slider'></span>
			</ToggleStyled>
		</>
	);
};

export default Toggle;
