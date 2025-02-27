import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './pages/login.jsx'
import RegisterPage from './pages/register.jsx'
import UserPage from './pages/users.jsx'
import BookPage from './pages/book.jsx'
import './style/global.css'
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TodoApp from './components/todo/TodoApp.jsx'
import ErrorPage from './pages/errors.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />
      },
      {
        path: "/users",
        element: <UserPage />
      },
      {
        path: "/books",
        element: <BookPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
