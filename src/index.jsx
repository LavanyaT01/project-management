import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/App.css';

window.process = { env: {} };

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);