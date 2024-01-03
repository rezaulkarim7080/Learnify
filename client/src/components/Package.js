import React from 'react'
import { BsCheck2Circle, BsXCircle } from 'react-icons/bs';
import { FiCheckCircle, FiUsers } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';



const Package = ({ darkMode }) => {
    return (
        <div>

            <h1 className='heading'>Best Pricing Package </h1>
            <h1 className='subHeading'>These are our finest offers for you Pleasure
            </h1>
            <div>
                <section className="md:flex justify-between py-10 ">

                    {/* part1 */}

                    <div className={`glassyEffect m-2 md:w-[30%] hover:shadow-xl p-5 ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>

                        <div className="flex flex-col p-6 space-y-6 ">
                            <div className="space-y-2">
                                <h4 className="text-2xl py-2"> <BiUser size={40} />Starter</h4>
                                <span className="text-4xl py-2 ">$24
                                    <span className="text-sm tracki">/month</span>
                                </span>
                            </div>
                            <p >Features</p>
                            <ul className="flex-1 space-y-2">
                                <li className="flex items-center space-x-2">

                                    <div className='flex gap-2'><FiCheckCircle size={20} className='text-[#00b58b]' />  Unlimited Buying Courses</div>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <div className='flex gap-2'><FiCheckCircle size={20} className='text-[#00b58b]' /> 1User Account</div>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <div className='flex gap-2'><BsXCircle size={20} className='text-red-600' />  100+Video Tuts</div>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <div className='flex gap-2'><BsXCircle size={20} className='text-red-600' /> PublicDisplays</div>
                                </li>
                            </ul>
                            <button className="btn">Purchase Now</button>
                        </div>


                    </div>
                    {/* part 2*/}

                    <div className={`glassyEffect m-2 md:w-[30%] hover:shadow-xl p-5 ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`} >

                        <div className="flex flex-col p-6 space-y-6 ">
                            <div className="space-y-2">
                                <h4 className="text-2xl py-2"> <FiUsers size={40} />Starter</h4>
                                <span className="text-4xl py-2 ">$35
                                    <span className="text-sm tracki">/month</span>
                                </span>
                            </div>
                            <p >Features</p>
                            <ul className="flex-1 space-y-2">
                                <li className="flex items-center space-x-2">

                                    <div className='flex gap-2'><FiCheckCircle size={20} className='text-[#00b58b]' />  Unlimited Buying Courses</div>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <div className='flex gap-2'><FiCheckCircle size={20} className='text-[#00b58b]' /> 1User Account</div>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <div className='flex gap-2'><FiCheckCircle size={20} className='text-[#00b58b]' />  100+Video Tuts</div>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <div className='flex gap-2'><BsXCircle size={20} className='text-red-600' /> PublicDisplays</div>
                                </li>
                            </ul>
                            <button className="btn">Purchase Now</button>
                        </div>


                    </div>
                    {/* part 3 */}

                    <div className={`glassyEffect m-2 md:w-[30%] hover:shadow-xl p-5 ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`} >

                        <div className="flex flex-col p-6 space-y-6 ">
                            <div className="space-y-2">
                                <h4 className="text-2xl py-2"> <AiOutlineUsergroupAdd size={40} />Starter</h4>
                                <span className="text-4xl py-2 ">$45
                                    <span className="text-sm tracki">/month</span>
                                </span>
                            </div>
                            <p >Features</p>
                            <ul className="flex-1 space-y-2">
                                <li className="flex items-center space-x-2">

                                    <div className='flex gap-2'><FiCheckCircle size={20} className='text-[#00b58b]' />  Unlimited Buying Courses</div>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <div className='flex gap-2'><FiCheckCircle size={20} className='text-[#00b58b]' /> 1User Account</div>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <div className='flex gap-2'><FiCheckCircle size={20} className='text-[#00b58b]' />  100+Video Tuts</div>
                                </li>
                                <li className="flex items-center space-x-2">

                                    <div className='flex gap-2'><FiCheckCircle size={20} className='text-[#00b58b]' /> PublicDisplays</div>
                                </li>
                            </ul>
                            <button className="btn">Purchase Now</button>
                        </div>


                    </div>

                </section>
            </div >


        </div >
    )
}

export default Package