

import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Layout from './Layout/Layout'
import Home from './Home/Home'
import About from './About/About'
import Portfolio from './Portfolio/Portfolio'
import Contact from './Contact/Contact'
import NotFound from './NotFound/NotFound'


export default function App() {
  
  let routes = createBrowserRouter([{
 path:"", element:<Layout/>,children:[
    {index:true, element:<Home/>},
    {path:"About", element:<About/>},
    {path:"Portfolio", element:<Portfolio/>},
    {path:"Contact", element:<Contact/>},
    {path:"*" , element:<NotFound/>}
  ]
}])
  return (
      <>
      <RouterProvider router={routes}></RouterProvider>
      </>  
  )
}


