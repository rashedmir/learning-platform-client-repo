import React from 'react';
import { useLoaderData } from 'react-router';

const Course = () => {
    const courses = useLoaderData();
    const { title, category, course_image, course_level, details, duration, instructor, instructor_image, price, students, pre_requisite } = courses;
    console.log(courses);
    return (
        <div className='flex'>
            <div className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-2/3">

                <img className="rounded-t-lg" src={course_image} alt="" />

                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    <p className='py-2'>Course Details:</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{details}</p>
                    <hr></hr>
                    <p className="my-3 font-normal text-gray-700 dark:text-gray-400">Pre-Requisite: {pre_requisite}</p>
                </div>
            </div>
            <div className=" bg-slate-200 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-1/3 h-1/2 ml-5">
                <div className='flex items-center'>
                    <img className="m-5 w-14 rounded-full" src={instructor_image} alt="" />
                    <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">Instructor: {instructor}</h5>
                </div>
                <div className="p-5">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Category: {category}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Enrolled Student: {students}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Duration of course: {duration}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Level of difficulty: {course_level}</p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Price: {price}</p>
                    <button className='bg-green-400 rounded-md p-5 w-full'>Enroll now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;