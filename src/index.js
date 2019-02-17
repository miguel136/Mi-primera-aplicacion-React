import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import MiComponente from './components/MiComponente';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<App />,
document.getElementById('root')
);
ReactDOM.render(
    <MiComponente />,
    document.getElementById('MyComp')
    );

serviceWorker.unregister();
