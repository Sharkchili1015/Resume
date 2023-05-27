import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'virtual:windi.css'
import './lang';
import router from "./router/index"
import { RouterProvider as Router } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router router={router}>
      <App />
    </Router>
  </React.StrictMode>,
)
