/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Link } from 'react-router-dom';
import { TypeAnimation } from 'react-type-animation';


const Hero = ({ darkMode }) => {
    return (
        <div className=''>
            <div className="flex justify-around  items-center gap-2 md:mt-[80px]">

                {/* part-1 */}
                {/* image */}
                <div className='hidden md:block'>
                    <img src="https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/04/16191353/Online-Courses.png" alt="hero image" className='w-[90%]' />
                </div>

                {/* part-2 */}
                <div className=' '>

                    <TypeAnimation className='text-2xl font-bold text-[#00b58b] py-2'
                        sequence={[
                            'Explore the World of Data Science',
                            1000,
                            'Design Stunning Websites',
                            1000,
                            'Blockchain Revolution Awaits',
                            1000,
                            'Cybersecurity Starts Here',
                            1000,
                            'Cloud Computing Made Easy', 1000,
                            'The Future of Robotics', 1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <h1 className='py-2'>Join our courses today. This is place to enrich your Knowledge and increase your horizon.</h1>
                    {/* <h1>Learn from home with Experts.</h1> */}
                    <Link to={'/allcourses'} >
                        <button className='btn'>visit Courses </button>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Hero