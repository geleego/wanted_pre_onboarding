import './App.css';

import styled from 'styled-components';
import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Slider from './components/Slider';
import Input from './components/Input';
import Dropdown from './components/Dropdown';

const Container = styled.div`
	padding: 2em;
`;

function App() {
	return (
		<Container>
			<p>Toggle.js</p>
			<Toggle />

			<p>Tab.js</p>
			<Tab />

			<p>Slider.js</p>
			<Slider />

			<p>Input.js</p>
			<Input />

			<p>Dropdown.js</p>
			<Dropdown />
		</Container>
	);
}

export default App;
