import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Container, Row, Col } from 'react-bootstrap';
import rootReducer from './redux/reducers/reducers';
import Loader from './design/loader';
import FilterSection from './pokedex/filter-section/filter-section';
import StatsSection from './pokedex/stats-section/stats-section';

const Pokedex = lazy(() => import('./pokedex/Pokedex'));
const store = createStore(rootReducer);

const App = () => {
	return (
		<Container>
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
