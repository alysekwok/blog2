import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { NavBar } from './components/NavBar.tsx';
import Blog from './pages/Blog.tsx';
import Resume from './pages/Resume.tsx';
import Contact from './pages/Contact.tsx';


const Layout = () => {
  return (
    <>
    <div>
      <NavBar/>
      <Outlet/>
    </div>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/resume",
        element: <Resume />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
