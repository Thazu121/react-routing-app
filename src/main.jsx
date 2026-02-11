import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import RootLayout from "./Layouts/RootLayout.jsx"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from "./components/pages/Home.jsx"
import About from "./components/pages/About.jsx"
import Users from './components/pages/Users.jsx'
import UserDetails from './components/pages/UserDetails.jsx'
import SingleUserLoader from './Loaders/SingleUserLoader.jsx'
import UsersLoader from './Loaders/UserLoader.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "users", element: <Users /> ,loader:UsersLoader },
      {path:"users/:userid" ,element:<UserDetails />,loader:SingleUserLoader}


    ]
  },],

)



ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter basename="/react-routing-app">

    <RouterProvider router={router} />
    </BrowserRouter>
  </StrictMode>
)