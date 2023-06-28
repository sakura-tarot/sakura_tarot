import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Application from './Application/Application'

function App() {
  return (
    <>
      <BrowserRouter>
        <Application/>
      </BrowserRouter>
    </>
  )
}

export default App
