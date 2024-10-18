import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from "./Login"
import "./main.css"
import PrimeReact from "primereact/api";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Login />
  </>,
)
