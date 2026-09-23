import React, {lazy, Suspense} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Container, Navbar} from 'react-bootstrap';
import rootReducer from './redux/reducers/reducers';
import Loader from './design/loader';
import Title from './design/title';
import FilterSection from './pokedex/filter-section/filter-section';
import StatsSection from './pokedex/stats-section/stats-section';
import styled from 'styled-components';

const ARight = styled.a`
	margin-left: auto;
	color: white;
	text-decoration: none;

	&:hover {
		color: white;
		text-decoration: underline;
	}
`;

const SpanWhite = styled.span`
	color: white;
`;

const PokedexItems = styled.div`
	display: grid;
	width: 100%;
	min-width: 0;
	box-sizing: border-box;
	grid-template-columns: repeat(auto-fill, 120px);
	grid-auto-rows: 120px;
	column-gap: 4px;
	row-gap: 10px;
	justify-content: space-between;
	margin-top: 5px;
	padding-bottom: 8px;
`;

const TitleGrid = styled.div`
	display: grid;
	justify-items: center;
`;

const FiltersGrid = styled.div`
	display: grid;
	width: 100%;
	min-width: 0;
	box-sizing: border-box;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 1.5rem;
`;

const MainContainer = styled(Container)`
	padding-bottom: calc(40px + env(safe-area-inset-bottom));
	min-height: 100vh;
`;

const CustomNavbar = styled(Navbar)`
	height: 40px;
	align-items: center;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0;
	padding-bottom: env(safe-area-inset-bottom);
`;
const Pokedex = lazy(() => import('./pokedex/Pokedex'));
const store = createStore(rootReducer);
const currentYear = new Date().getFullYear();

const App = () => {
	return (
		<div className="body-inner">
			<MainContainer>
				<TitleGrid>
					<Title/>
				</TitleGrid>
				<Provider store={store}>
					<FiltersGrid>
						<StatsSection/>
						<FilterSection/>
					</FiltersGrid>
					<PokedexItems>
						<Suspense fallback={<Loader/>}>
							<Pokedex/>
						</Suspense>
					</PokedexItems>
				</Provider>
			</MainContainer>
			<CustomNavbar fixed="bottom" bg="dark">
				<SpanWhite>GoDex - 2019 - {currentYear}</SpanWhite>
				<ARight href="https://github.com/joelcancela/GoDex">
					<i className="devicon-github-plain"/> GitHub</ARight>
			</CustomNavbar>
		</div>
	);
};

export default App;
