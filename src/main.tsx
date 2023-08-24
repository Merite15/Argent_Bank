import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './assets/style.css';
import { AppRoutes } from './components/AppRoutes';

const domContainer = document.getElementById('root') as HTMLElement

createRoot(domContainer).render(
  <React.StrictMode>
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>
</React.StrictMode>
)