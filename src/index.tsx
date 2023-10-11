import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyled } from './components';
import {
  ApiProvider,
} from '@reduxjs/toolkit/query/react'
import { api } from './mock/api';

const { worker } = require("./mock/browser");
worker.start();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <ApiProvider api={api}>
    <GlobalStyled/>
    <App />
    </ApiProvider>
  </BrowserRouter>
);

reportWebVitals();
