import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './assets/Components/Home/Home.jsx';
import About from './assets/Components/About/About.jsx';
import Contact from './assets/Components/Contact/Contact.jsx';
import Users from './assets/Components/Users/Users.jsx';
import UserDetails from './UserDetails/UserDetails.jsx';
import Posts from './assets/Components/Posts/Posts.jsx';
import PostDetails from './assets/Components/PostDetails/PostDetails.jsx';
import ErrorPage from './assets/Components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
        element: <Posts></Posts>
      },
      {
        path:'/post/:id',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element:<PostDetails></PostDetails>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
