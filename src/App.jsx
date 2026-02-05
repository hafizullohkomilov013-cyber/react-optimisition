import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicLayouts from './Layouts/PublicLayouts'
const Home = lazy(() => import("./Pages/Home"));
const Aboute = lazy(() => import("./Pages/Aboute"));
const Contact = lazy(() => import("./Pages/Contact"));

function App() {

  const routes = createBrowserRouter([
    {
      path:"/",
      element:<PublicLayouts/>,
      children:[
        {
          index: true,
          element:<Home/>,
        },
        {
          path:"/aboute",
          element:<Aboute/>,
        },
        {
          path:"/contact",
          element:<Contact/>,
        },
      ]
    }
  ])
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
