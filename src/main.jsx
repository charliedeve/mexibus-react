import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./login/Login"
import "./main.css"
import PrimeReact from "primereact/api";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AppRouter />
  </>,
)
