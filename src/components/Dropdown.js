import { useState } from 'react';
import styled from 'styled-components';

const DropdownStyled = styled.div``;

const Dropdown = () => {
	// const [value, setValue] = useState('all');

	const menu = [
		{ value: 'all', option: 'All Symbols' },
		{ value: 'btcusd', option: 'BTCUSD.PERP' },
		{ value: 'ethusd', option: 'ETHUSD.PERP' },
		{ value: 'bchusd', option: 'BCHUSD.PERP' },
		{ value: 'lrcusd', option: 'LRCUSD.PERP' },
		{ value: 'xrpusd', option: 'XRPUSD.PERP' },
	];

	return (
		<>
			<DropdownStyled>
				<label htmlFor='perp'></label>
				<select id='perp'>
					{menu.map((m) => (
						<option key={m.value} value={m.value}>
							{m.option}
						</option>
					))}
				</select>
			</DropdownStyled>
		</>
	);
};

export default Dropdown;
