import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
import './css/index.css';
import App from './App';


const a = true;


const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <React.StrictMode>
   <App />
  </React.StrictMode>
);

