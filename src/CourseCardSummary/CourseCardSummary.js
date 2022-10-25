import React from 'react';
import { Link } from 'react-router-dom';

const CourseCardSummary = ({ category }) => {
    // console.log(category);
    const { _id, course_image, title, details } = category;

    return (
        <div className="flex flex-col items-center mb-10 bg-gray-100 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className='p-10'>
                <img className="rounded-t-lg w-screen mt-4" src={course_image} alt="" />

            </div>
            <div className="p-5 mx-10">
                <h5 className="mb-5 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {
                        details.length > 100 ? <p>{details.slice(0, 150) + ' ...'}</p> : <p>{details}</p>
                    }
                </p>
                <Link to={`/courses/${_id}`} className="mb-10 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    );
};

export default CourseCardSummary;