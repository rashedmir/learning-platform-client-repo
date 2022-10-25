import React from 'react';
import { useLoaderData } from 'react-router';
import CourseCardSummary from '../../CourseCardSummary/CourseCardSummary';

const Category = () => {
    const courseCategory = useLoaderData();
    // console.log(courseCategory);
    return (
        <div>
            {/* <h2>This category has courses: {courseCategory.length}</h2> */}
            {
                courseCategory.map(category => <CourseCardSummary key={category._id} category={category}></CourseCardSummary>)
            }
        </div>
    );
};

export default Category;