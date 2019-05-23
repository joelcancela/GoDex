import React, { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Container, Row } from 'react-bootstrap';
import filters from './redux/reducers/filters';
import Loader from './design/loader';
import Filter from './pokedex/filter/filter';

const Pokedex = lazy(() => import('./pokedex/Pokedex'));
const store = createStore(filters);

const App = () => {
	return (
		<Container>
			<Provider store={store}>
				<Row>
					<Filter />
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
