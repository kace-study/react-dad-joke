import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
