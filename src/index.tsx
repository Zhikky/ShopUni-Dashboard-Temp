import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import 'chart.js/auto'; // Import Chart.js library
import { BrowserRouter } from 'react-router-dom';

// Set the default color for Chart.js
import Chart from 'chart.js/auto';
Chart.defaults.color = '#fff'; // Set the default color


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
