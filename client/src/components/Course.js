import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course, darkMode }) => {
    return (
        <div className={`glassyEffect  hover:shadow-xl  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>
            <img src={course.title_image} alt={course.title} className='rounded-lg h-[250px]' />
            <div className='px-2'>

                <h1 className='text-xl font-semibold py-2'>{course.title}</h1>
                <p className='py-1'>Price: $ {course.price}</p>

                <div className='py-2'>
                    <Link to={`singleCourse/${course._id}`} className='px-4 py-2 my-2 bg-[#00b58b] text-white rounded-md text-lg '>Enroll</Link>
                </div>

            </div>


        </div>
    );
};

export default Course;
