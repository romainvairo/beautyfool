import React from 'react';
import ReactDOM from 'react-dom';

import './momentLocales';
import './axios';
import './index.scss';
import './assets/styles/index.scss';
import App from './components/Globals/App';

console.warn = () => {}

ReactDOM.render(<App />, document.getElementById('root'));
