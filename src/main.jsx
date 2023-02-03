import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import TestPage from './components/TestPage'
import TestPage2 from './components/TestPage2'
import TestPage3 from './components/TestPage3'
import TestPage4 from './components/TestPage4'
import TestPage5 from './components/TestPage5'
import TestPage6 from './components/TestPage6'
import TestPage7 from './components/TestPage7'
import TestPage8 from './components/TestPage8'
import TestPage9 from './components/TestPage9'
import Result from './components/Result'
import Letter from './components/Letter'
import GiveResult from './components/GiveResult'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element:
    <App></App>
  },
  {
    path:"/testpage",
    element:
    <TestPage></TestPage>
  },
  {
    path:"/testpage2",
    element:
    <TestPage2/>
  },
  {
    path:"/testpage3",
    element:
    <TestPage3/>
  },{
    path:"/testpage4",
    element:
    <TestPage4/>
  },  {
    path:"/testpage5",
    element:
    <TestPage5></TestPage5>
  },
  {
    path:"/testpage6",
    element:
    <TestPage6></TestPage6>
  },
  {
    path:"/testpage7",
    element:
    <TestPage7></TestPage7>
  }, {
    path:"/testpage8",
    element:
    <TestPage8></TestPage8>
  },
  {
    path:"/testpage9",
    element:
    <TestPage9></TestPage9>
  },
  {
    path:"/result",
    element:
    <Result></Result>
  },
  {
    path:"/letter",
    element:
    <Letter></Letter>
  },
  {
    path:"/giveresult",
    element:
    <GiveResult></GiveResult>
  }

  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
