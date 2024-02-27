import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import MainRouter from './MainRouter'

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={MainRouter}/>
)
