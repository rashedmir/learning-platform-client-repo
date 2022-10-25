import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className=''>
            <div className='flex items-center'>
                <img className='w-7 h-7 m-2' src='https://cdn-icons-png.flaticon.com/512/6791/6791242.png' alt='img'/>
            <h1 className='text-xl font-bold text-gray-600'>Select Category</h1>

            </div>
            <hr className='border-1 border-slate-500'></hr>
            <div>
                {
                    categories.map(category => <p key={category}>
                        <div className='flex m-3'>

                            <img className='mr-2 w-7 h-7 shadow-lg' src={category.photo} alt="img" />
                            <Link className='text-xl hover:text-green-500' to={`/category/${category.id}`}>{category.name}</Link>

                        </div>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;