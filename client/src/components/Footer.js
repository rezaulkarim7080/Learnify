/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import { FaTooth } from "react-icons/fa";
import { MdOutlineDuo } from 'react-icons/md';


const Footer = ({ darkMode }) => {
    return <>

        <div>
            <div className={`glassyEffect footer p-10  px-5 border-none z-50  ${darkMode && " hover:shadow-[#000000]"}`}>
                <div className='flex justify-center gap-2 items-start flex-col' >
                    <div className='flex justify-center gap-2 items-center'>
                        <MdOutlineDuo size={60} className='text-[#00b58b]' />
                        <Link className=" text-3xl text-[#00b58b] font-bold">Learnify</Link>
                    </div>
                    <h1>Get the care you need todayBringing You the highest <br /> quality of dental care</h1>
                </div>
                <nav>
                    <header className="footer-title text-[#00b58b]">Services</header>

                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Reviews</a>
                </nav>
                <nav>
                    <header className="footer-title  text-[#00b58b]">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title text-[#00b58b]">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </div>


    </>



}

export default Footer