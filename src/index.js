import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';

ReactDom.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
