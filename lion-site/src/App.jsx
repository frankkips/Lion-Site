import './App.css'
import Home from './Home'
import Product from './Product'
import About from './About'
import Contact from './Contact'
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom'

function App() {


  const router = createBrowserRouter([{
    path: '/',
    element: <Home/>,
    errorElement: <div className='err'>Ooops! 404 Not Found <Link to='/' className='return'>Return Home</Link></div>,
  },
  {
    path: '/product',
    element: <Product/>,
  },
  {
    path: '/about',
    element: <About/>,
  },
  {
    path: '/contact',
    element: <Contact/>,
  },
  ])

  return (

    <RouterProvider router={router}/>
  )
}

export default App
