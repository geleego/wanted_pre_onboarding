import { useEffect, useState } from 'react';
import styled from 'styled-components';

const SliderStyled = styled.div`
	& > .visualBox {
		width: 370px;
		height: 58px;
		border: 1px solid #ddd;
		background: #f9f9f9;
		border-radius: 5px;
		margin-bottom: 14px;
		& > .visual {
			margin: 19px;
			text-align: end;
			& > .vValue {
				font-weight: 700;
			}
			& > .vUnit {
				color: #ababab;
				font-weight: 600;
				margin-left: 25px;
			}
		}
	}

	& > #slider {
		-webkit-appearance: none;
		width: 360px;
		height: 5px;
		outline: none;
		background: #ebebeb;
		background-image: linear-gradient(#10afaf, #10afaf);
		background-repeat: no-repeat;
		margin-bottom: 24px;
		position: absolute;
	}

	& > #slider::-webkit-slider-thumb {
		position: relative;
		z-index: 3;
		margin: -20px 2px;
		-webkit-appearance: none;
		appearance: none;
		width: 22px;
		height: 22px;
		background: #10afaf;
		border: 3px solid #fff;
		cursor: pointer;
		border-radius: 50%;
		box-shadow: 0 1px 5px 0 #ababab;
	}

	& > #ticks01 {
		display: flex;
		justify-content: space-between;
		position: relative;
		top: 0;
		width: 360px;
		& > option {
			background: #ebebeb;
			border-radius: 100px;
			position: relative;
			top: -6px;
			left: 2px;
			width: 17px;
			height: 14px;
		}
	}

	& > .bottomBtn {
		width: 360px;
		justify-content: space-between;
		display: flex;
		& > button {
			background: #ebebeb;
			height: 16px;
			color: #adadad;
			border: 0;
			border-radius: 50px;
			font-size: 10px;
		}
	}
`;

const Slider = () => {
	const [value, setValue] = useState(1);
	const [optionColor, setOptionColor] = useState('#ebebeb');

	/**
	 * range 변경
	 * @param {*} e
	 */
	const onChange = (e) => {
		setValue(e.target.value);
	};

	/**
	 * 버튼 클릭 이벤트
	 */
	const onClick = (e) => {
		setValue(e.target.value);
	};

	const rangeBgStyle = {
		backgroundSize: `${value}%, 100%`,
	};

	const percent = [1, 25, 50, 75, 100];

	return (
		<>
			<SliderStyled>
				<div className='visualBox'>
					<div className='visual'>
						<span className='vValue'>{value}</span>
						<span className='vUnit'>%</span>
					</div>
				</div>

				<input id='slider' type='range' min='1' max='100' value={value} onChange={onChange} step='1' style={rangeBgStyle} list='ticks01' />
				<datalist id='ticks01'>
					{percent.map((p) => (
						<option key={p} value={p} style={{ background: optionColor }}></option>
					))}
				</datalist>

				<div className='bottomBtn'>
					{percent.map((p) => (
						<button key={p} onClick={onClick} value={p}>
							{p}%
						</button>
					))}
				</div>
			</SliderStyled>
		</>
	);
};

export default Slider;
