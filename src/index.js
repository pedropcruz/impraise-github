import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/basscss/css/basscss.min.css';
import './global.css';
import App from './containers/app/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
