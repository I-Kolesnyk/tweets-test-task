import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from 'components/App';
import { store, persistor } from 'redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    {/* <BrowserRouter basename='tweets-test-task'> */}
      <HashRouter>
    <App />
    </HashRouter>
    {/* </BrowserRouter> */}
    </PersistGate>
    </Provider>
  </React.StrictMode>
);



