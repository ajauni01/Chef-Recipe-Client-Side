import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main.jsx';
import Home from './Components/Main/Home/Home.jsx';
import Blog from './Components/Main/Blog/Blog.jsx';

// router
const router = createBrowserRouter([
  // loader: ({ params }) => fetch(`https://dragon-news-server-ajauni01.vercel.app/news/${params.id}`)
  {
    path: "/",
    element: <Main></Main>,
    children: [
      // default path
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/allChefs')
      },
      {
        path: "home",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/allChefs')
      },
      {
        path: "blog",
        element: <Blog></Blog>
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
