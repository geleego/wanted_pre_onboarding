import { useState } from 'react';
import styled from 'styled-components';

const InputStyled = styled.form`
	width: 308px;
	& .formLabel {
		color: #858584;
		font-size: 12px;
		display: block;
		padding: 6px;
	}

	& .formBox {
		width: 308px;
		padding: 6px 12px;
		color: rgba(0, 0, 0, 0.85);
		font-size: 14px;
		line-height: 1.5715;
		background-color: #fff;
		border: 1px solid #d8d8d4;
		border-radius: 2px;
		display: inline-flex;

		& > input {
			width: 100%;
			padding: 0;
			border: none;
			outline: none;
		}
		& > span {
			margin-left: 4px;
			display: flex;
			flex: none;
			align-items: center;
		}
	}

	& > .emailForm {
		margin-bottom: 10px;
		& > span {
		}
	}
	& > .pwForm {
		& > span {
		}
	}
`;

const Input = () => {
	const [type, setType] = useState('password');

	return (
		<InputStyled>
			<div className='emailForm'>
				<label title='E-mail' className='formLabel'>
					E-mail
				</label>
				<span className='formBox'>
					<input id='email' type='email' />
					<span></span>
				</span>
			</div>

			<div className='pwForm'>
				<label title='Password' className='formLabel'>
					Password
				</label>
				<span className='formBox'>
					<input id='password' type={type} />
					<span>{type === 'text' ? <i class='fa fa-eye' aria-hidden='true'></i> : <i className='fa fa-eyes' aria-hidden='true'></i>}</span>
				</span>
			</div>
		</InputStyled>
	);
};

export default Input;
