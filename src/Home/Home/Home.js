import React from 'react';
import { useLoaderData } from 'react-router';
import CourseCardSummary from '../../CourseCardSummary/CourseCardSummary';

const Home = () => {
    const allCategory = useLoaderData();
    return (
        <div>
            <h2>Total courses available: {allCategory.length}</h2>
            <div>
                {
                    allCategory.map(category => <CourseCardSummary key={category._id} category={category}></CourseCardSummary>)
                }
            </div>
        </div>
    );
};

export default Home;