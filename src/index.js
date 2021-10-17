import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));
serviceWorker.register();
