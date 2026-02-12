import React from 'react';
import ReactDOM from 'react-dom/client';
import { KonstaProvider } from 'konsta/react';
import 'konsta/css';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KonstaProvider theme="ios">
      <App />
    </KonstaProvider>
  </React.StrictMode>,
);
