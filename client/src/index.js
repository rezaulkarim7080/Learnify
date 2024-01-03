import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserAuthContextProvider } from './context/UserAuthContext';
import { AuthProvider } from './context/auth';


ReactDOM.render(
  <AuthProvider>
    <UserAuthContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserAuthContextProvider>
  </AuthProvider>,
  document.getElementById('root')
);

reportWebVitals();
