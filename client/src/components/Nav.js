import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { BiSolidUserCircle } from 'react-icons/bi';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useUserAuth } from '../context/UserAuthContext';
import { FaTooth } from "react-icons/fa";
import { useAuth } from '../context/auth';
import { MdOutlineDuo } from "react-icons/md";


const Nav = ({ darkMode, toggleDarkMode }) => {




    const [auth, setAuth] = useAuth();
    const { user, logOut } = useUserAuth()



    const handleLogout = async () => {
        if (auth.user && auth.user.provider === 'google') {

            try {
                await logOut();
            } catch (err) {
                console.log(err.message);
            }
        } else {

            setAuth({
                ...auth,
                user: null,
                token: "",
            });

            await logOut();

            localStorage.removeItem("auth");
        }


    };






    return (

        <div>
            <div className={`glassyEffect navbar bg-base-100 px-5 border-none z-50  ${darkMode && " hover:shadow-[#000000]"}`}>
                <div className="navbar-start gap-2 flex  flex-row items-center ">
                    <div className="dropdown m-2">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='text-xl font-medium'><Link to={'/'}>Home</Link>
                            </li>

                            <li className='text-xl font-medium'><Link to={'/allcourses'}>All Courses</Link>
                            </li>
                            <li className='text-xl font-medium'><Link to={'/faq'}>FAQ</Link>
                            </li>
                            <li className='text-xl font-medium'><Link to={'/blog'}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='flex justify-center gap-2 items-center'>


                        <MdOutlineDuo size={60} className='text-[#00b58b]' />
                        <Link className=" text-3xl text-[#00b58b] font-bold"> Learnify </Link>

                    </div>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-xl font-medium'><Link to={'/'}>Home</Link>
                        </li>
                        <li className='text-xl font-medium'><Link to={'/allcourses'}>All Courses</Link>
                        </li>
                        <li className='text-xl font-medium'><Link to={'/faq'}>FAQ</Link>
                        </li>


                        <li className='text-xl font-medium'><Link to={'/blog'}>Blog</Link>
                        </li>

                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    <div className=' gap-5 justify-end hidden md:flex'>
                        <button onClick={toggleDarkMode}>
                            {
                                darkMode ?
                                    <div className='flex gap-1'>
                                        <MdLightMode size={25} />
                                        <h1>light mode</h1>
                                    </div> :
                                    <div className='flex gap-1'>
                                        <MdDarkMode size={25} />
                                        <p>dark mode</p>
                                    </div>
                            }
                        </button>
                    </div>
                    {auth.user || user ? (<>
                        <h1 className='md:text-lg md:font-medium md:px-2 '>{auth.user ? auth.user.name : user.displayName}</h1>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className=" btn-ghost btn-circle avatar">
                                <div className="w-15 rounded-full outline  outline-[#00b58b] ">
                                    <img src={auth.user?.userImage || user?.photoURL} alt={auth.user?.name || user?.displayName} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">


                                <li>
                                    <Link to='/' onClick={handleLogout} className='bg-[#00b58b] text-xl px-2 py-2 hover:bg-white z-40 hover:text-[#00b58b]'>Logout</Link></li>
                            </ul>
                        </div>

                    </>)
                        :
                        (<>
                            <Link to={'/login'} className="btn btn-ghost text-xl">Login</Link>
                            <Link to={'/register'} className="btn btn-ghost text-xl">Signup</Link>
                        </>)

                    }
                </div>
            </div>
        </div >
    )



};

export default Nav;
