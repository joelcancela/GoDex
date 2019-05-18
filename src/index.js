import React, {lazy, Suspense} from "react";
import {render} from "react-dom";
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Container, Row} from 'react-bootstrap';
import Loader from './components/design/loader';

const Pokedex = lazy(() => import('./components/pokedex/Pokedex'));

const App = () => {
	return (
		<Container>
			<Row>
				<Suspense fallback={<Loader/>}>
					<Pokedex/>
				</Suspense>
			</Row></Container>
	);
};

render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
