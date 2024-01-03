import React from 'react'
import { GiHealthIncrease } from 'react-icons/gi';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { PiCertificateFill } from 'react-icons/pi';


const Benefits = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className='py-10'>
            <h1 className='heading '>Benefits </h1>
            <h1 className='subHeading'>Benefits of learning from us</h1>
            <div className='md:flex justify-around gap-5'>

                <div className={`glassyEffect p-3  hover:shadow-xl m-2  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>
                    <h1>
                        <GiHealthIncrease size={40} />
                    </h1>
                    <h1 className='text-xl font-semibold'>Get Skilled</h1>
                    <p>from thousands of quality courses.Designed by experts</p>
                </div>

                <div className={`glassyEffect p-3  hover:shadow-xl m-2   ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>
                    <h1>
                        <FaChalkboardTeacher size={40} />
                    </h1>
                    <h1 className='text-xl font-semibold'>Expert Tutors</h1>
                    <p>All our courses are designed by experts so that you can get best of the best.</p>
                </div>

                <div className={`glassyEffect p-3  hover:shadow-xl m-2   ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>
                    <h1>
                        <PiCertificateFill size={40} />
                    </h1>
                    <h1 className='text-xl font-semibold'>Certificate</h1>
                    <p>After completing any course with minimum required marks you get certificate.</p>
                </div>

            </div>
        </div>
    )
}

export default Benefits