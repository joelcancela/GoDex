import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Container, Row, Col } from 'react-bootstrap';
import rootReducer from './redux/reducers/reducers';
import Loader from './design/loader';
import Title from './design/title';
import FilterSection from './pokedex/filter-section/filter-section';
import StatsSection from './pokedex/stats-section/stats-section';

const Pokedex = lazy(() => import('./pokedex/Pokedex'));
const store = createStore(rootReducer);

const App = () => {
	return (
		<Container>
			<Row>
				<Col xs={{ span: 4, offset: 4 }} md={{ span: 4, offset: 4 }} lg={{ span: 4, offset: 4 }} className="text-center">
					<Title />
				</Col>
			</Row>
			<Provider store={store}>
				<Row>
					<Col xs lg md="6">
						<StatsSection />
					</Col>
					<Col xs lg md="6">
						<FilterSection />
					</Col>
				</Row>
				<Row>
					<Suspense fallback={<Loader />}>
						<Pokedex />
					</Suspense>
				</Row>
			</Provider>
		</Container >
	);
};

export default App;
