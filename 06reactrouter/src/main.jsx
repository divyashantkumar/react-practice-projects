import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/home/Home.jsx'
import About from './components/about/AboutUs.jsx'
import Contact from './components/contact/Contact.jsx'
import GitHub, { gitInfoLoader } from './components/github/GitHub.jsx';
import User from './components/User.jsx';
import NotFound404 from './NotFound404.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route
        loader={gitInfoLoader}
        path='git'
        element={<GitHub />}
      />
      <Route path='user/' element={<User />}>
        <Route path=':userId' element={<User />} />
      </Route>
      <Route path='*' element={<NotFound404 />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
