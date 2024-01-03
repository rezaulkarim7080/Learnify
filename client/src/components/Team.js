import React from 'react'
import { RiTwitterXFill } from 'react-icons/ri';
import { BsFacebook } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';


const Team = ({ darkMode, toggleDarkMode }) => {
    return (
        <div className="py-10">
            <h1 className='heading'>Team </h1>
            <h1 className='subHeading'>Meet Our Team
            </h1>
            <div className='md:grid grid-cols-4 gap-4'>

                <div className={`glassyEffect m-2 hover:shadow-xl  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>
                    <img src="https://healthysmileshouston.com/wp-content/uploads/2019/05/AdobeStock_207684339.jpeg" alt="" />
                    <h1 className="py-2 px-2 text-2xl font-semibold">Professor Tech Guru</h1>
                    <h1 className="py-2 px-2 text-[#00b58b]">CEO</h1>
                    <div className='flex gap-3 py-3 px-2'>
                        <h1>
                            <RiTwitterXFill size={20} />
                        </h1>
                        <h1>
                            <BsFacebook size={20} />
                        </h1>
                        <h1>
                            <FaLinkedinIn size={20} />
                        </h1>
                    </div>
                </div>
                <div className={`glassyEffect m-2 hover:shadow-xl  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>
                    <img src="https://thumbs.dreamstime.com/b/young-businessman-working-office-casual-sitting-desk-writing-notes-to-personal-organizer-33413771.jpg" alt="" />
                    <h1 className="py-2 px-2 text-2xl font-semibold"> CodeMaster</h1>
                    <h1 className="py-2 px-2 text-[#00b58b]">HR Manger</h1>
                    <div className='flex gap-3 py-3 px-2'>
                        <h1>
                            <RiTwitterXFill size={20} />
                        </h1>
                        <h1>
                            <BsFacebook size={20} />
                        </h1>
                        <h1>
                            <FaLinkedinIn size={20} />
                        </h1>
                    </div>
                </div>
                <div className={`glassyEffect m-2 hover:shadow-xl  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>
                    <img src="https://i.pinimg.com/originals/0a/62/f4/0a62f4d35ec0496e70c7562a5be1ec43.jpg" alt="" />
                    <h1 className="py-2 px-2 text-2xl font-semibold">Teacher WebWizard</h1>
                    <h1 className="py-2 px-2 text-[#00b58b]">Instructor</h1>
                    <div className='flex gap-3 py-3 px-2'>
                        <h1>
                            <RiTwitterXFill size={20} />
                        </h1>
                        <h1>
                            <BsFacebook size={20} />
                        </h1>
                        <h1>
                            <FaLinkedinIn size={20} />
                        </h1>
                    </div>
                </div>
                <div className={`glassyEffect m-2 hover:shadow-xl  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>
                    <img src="https://asesoriaeninformatica.com/wp-content/uploads/2017/02/web-designer.jpg" alt="" />
                    <h1 className="py-2 px-2 text-2xl font-semibold">Coach DataWhiz</h1>
                    <h1 className="py-2 px-2 text-[#00b58b]">Instructor</h1>
                    <div className='flex gap-3 py-3 px-2'>
                        <h1>
                            <RiTwitterXFill size={20} />
                        </h1>
                        <h1>
                            <BsFacebook size={20} />
                        </h1>
                        <h1>
                            <FaLinkedinIn size={20} />
                        </h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Team