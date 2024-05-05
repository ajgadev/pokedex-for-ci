import React from 'react'
// import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'

const $app = document.getElementById('app')

if ($app) {
  const root = createRoot($app)
  root.render(<App />)
}
// ReactDOM.render(<App />, $app)
