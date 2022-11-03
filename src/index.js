import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/global.scss';
import App from '../src/components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
