import React from 'react';
import { NavLink } from 'react-router-dom';

const PageNavigation = ({ title, cartTitle }) => {
    return (
        <div className='flex gap-1 items-center'>
            <NavLink to="/ " className="">all-courses</NavLink> / <h1 className="text-[#00b58b]">{title}</h1> / <h1 className="text-[#00b58b]">{cartTitle}</h1>
        </div>
    );
};

export default PageNavigation;