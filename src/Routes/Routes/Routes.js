import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../layout/Main';
import Home from '../../Home/Home/Home';
import Category from '../../Category/Category/Category';
import Course from '../../Course/Course/Course';
import Login from '../../Login/Login/Login';
import Register from '../../Login/Register/Register';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`http://localhost:5000/courses`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
])


export default routes;