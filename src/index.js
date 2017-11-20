import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Icon} from 'react-fa'


const json = require('./resume.json'); // load resume file

ReactDOM.render(<App resume={json}/>, document.getElementById('root'));
registerServiceWorker();
