import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './state/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>  {/* App全体でvalueが利用できる childrenがAppに該当する */}
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);

