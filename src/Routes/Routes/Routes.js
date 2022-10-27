import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Main from '../../layout/Main';
import Home from '../../Home/Home/Home';
import Category from '../../Category/Category/Category';
import Course from '../../Course/Course/Course';
import Login from '../../Login/Login/Login';
import Register from '../../Login/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import TermsAndConditions from '../../Others/TermsAndConditions/TermsAndConditions';
import Error404 from '../../Error404/Error404';
import Blog from '../../Blog/Blog';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://b610-lerning-platform-server-side-rashedmir.vercel.app/courses`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-rashedmir.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Course></Course>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-rashedmir.vercel.app/courses/${params.id}`)
            },
            {
                path: '/private/:id',
                element: <PrivateRoute><Course></Course></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-rashedmir.vercel.app/courses/${params.id}`)
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path: '/terms',
        element: <TermsAndConditions></TermsAndConditions>
    },
    {
        path: '/*',
        element: <Error404></Error404>
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    }
])


export default routes;