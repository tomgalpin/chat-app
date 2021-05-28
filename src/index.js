import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from 'assets/styles/globals.js';
import App from 'pages/app';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
