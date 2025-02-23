import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Імпортуйте Provider та PersistGate
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Імпортуйте store та persistor
import store, { persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Обгортаємо додаток Provider'ом */}
    <Provider store={store}>
      {/* Обгортаємо додаток PersistGate, передаємо persistor */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
