import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { OrdersContextProvider } from './context/OrdersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <OrdersContextProvider>
      <App />
    </OrdersContextProvider>
  </React.StrictMode>
)