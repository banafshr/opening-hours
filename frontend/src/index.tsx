import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DataProvider from 'providers/DataProvider/';
import * as serviceWorker from './serviceWorker';
import 'styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
