import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRouter from './MainRouter'
import { Provider } from 'react-redux'
import Store from './Store'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
    <RouterProvider router={MainRouter} />
  </Provider>
)
