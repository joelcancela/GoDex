import React, {lazy, Suspense} from 'react';
import {Container, Row} from 'react-bootstrap';
import Loader from './design/loader';

const Pokedex = lazy(() => import('./pokedex/Pokedex'));

const App = () => {
	return (
		<Container>
			<Row>
				<Suspense fallback={<Loader />}>
					<Pokedex />
				</Suspense>
			</Row></Container>
	);
};

export default App;
