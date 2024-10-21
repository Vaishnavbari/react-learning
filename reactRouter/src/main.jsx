import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/about.jsx'
import Contact from './components/Contact/contact.jsx'
import Github, { githubInfoLoader } from './components/Github/github.jsx'
import Login from './components/Login/login.jsx'
import User from './components/User/User.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route loader={githubInfoLoader} path="github" element={<Github />} />
        <Route path='user/:userId' element={<User />} />
      </Route>

      <Route path="/login" element={<Login />} />
    </>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
