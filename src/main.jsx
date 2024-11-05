

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { persistor, store } from './redux/store.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');

// Check if createRoot is available
const root = ReactDOM.createRoot ? ReactDOM.createRoot(rootElement) : ReactDOM.unstable_createRoot(rootElement);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
    </PersistGate>
  </Provider>
);
