import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/global.scss';
import App from '../src/components/App/App';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
