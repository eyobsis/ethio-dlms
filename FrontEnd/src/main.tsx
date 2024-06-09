import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import { BrowserRouter } from 'react-router-dom';

// Import the AuthContext Provider
import { AuthProvider } from './Contexts/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
