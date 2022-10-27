import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Flip, Slide, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';


const notifyEnrolled = () =>
    toast.success('Congratulations, Enrolled Successful', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });


const Course = () => {
    const courses = useLoaderData();
    const { user } = useContext(AuthContext);

    const { _id, category_id, title, category, course_image, course_level, details, duration, instructor, instructor_image, price, students, pre_requisite } = courses;
    console.log(courses);
    return (
        <div className='flex'>
            <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-2/3 ml-5">

                <img className="p-3 rounded-t-lg" src={course_image} alt="" />

                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className='py-2'>Course Details:</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
                    <hr></hr>
                    <p className="my-3 font-normal text-gray-700 dark:text-gray-400"><span className='font-bold'>Pre-Requisite:</span> {pre_requisite}</p>
                    <Link to={`/category/${category_id}`}>
                        <button type="button" class="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br 
                        focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg 
                        text-sm px-5 py-2.5 text-center mr-2 mb-5 float-right">All news in this category</button>

                    </Link>
                </div>
            </div>
            <div className=" bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-1/3 h-1/2 ml-5">
                <div className='flex items-center'>
                    <img className="m-5 w-14 rounded-full" src={instructor_image} alt="" />
                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white"><span className='text-sm mr-24'>Instructor:</span> {instructor}</h5>
                </div>
                <div className="p-5">
                    <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400"><span className='font-bold text-sm'>Category:</span> {category}</p>
                    <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400"><span className='font-bold text-sm'>Enrolled Student:</span> {students}</p>
                    <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400"><span className='font-bold text-sm'>Duration of course:</span> {duration}</p>
                    <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400"><span className='font-bold text-sm'>Level of difficulty:</span> {course_level}</p>
                    <p className="mb-3 font-normal text-xl text-gray-700 dark:text-gray-400"><span className='font-bold text-sm'>Price:</span> {price}</p>
                    {/* <Link to={`/courses/${_id}`} onClick={() => notifyEnrolled()} className='bg-green-400 rounded-md p-5 w-full'>Enroll now</Link> */}
                    <div className='my-14 text-center'>
                        {/* <Link className='bg-yellow-300 rounded-md p-5 w-full font-bold text-white hover:bg-green-500' to={`/private/${_id}`} onClick={() => notifyEnrolled()}>Get Premium Access</Link> */}
                        {
                            user?.uid ?
                                <>
                                    <Link className='bg-green-400 rounded-md p-5 w-full font-bold text-white hover:bg-green-600' to={`/private/${_id}`} onClick={() => notifyEnrolled()}>Enroll now</Link>
                                </>
                                :
                                <>
                                    <Link className='bg-yellow-300 rounded-md p-5 w-full font-bold text-white hover:bg-green-500' to={`/private/${_id}`}>Get Premium Access</Link>
                                </>
                        }
                    </div>
                    <ToastContainer
                        theme="dark"
                        position="top-center"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss={false}
                        draggable
                        pauseOnHover
                    />
                </div>
            </div>
        </div>
    );
};

export default Course;