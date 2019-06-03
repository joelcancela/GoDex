import React from 'react';
import {render} from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/app';

render(<App />, document.getElementById('root'));

serviceWorker.register();
