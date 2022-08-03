import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './App.css';
import 'arvara/lib/styles.css';
import 'arvara/src/index.css';

// document.body.style.overflow = 'hidden';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
