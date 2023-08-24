import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/index';
import './assets/style.css';
import { AppRoutes } from './components/AppRoutes';

const domContainer = document.getElementById('root') as HTMLElement

createRoot(domContainer).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
)