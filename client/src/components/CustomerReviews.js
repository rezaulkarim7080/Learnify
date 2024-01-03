import React from 'react'
import { BsStarFill, BsStar } from 'react-icons/bs';


const CustomerReviews = ({ darkMode }) => {
    return (
        <div>
            <h1 className='heading '>Reviews </h1>
            <h1 className='subHeading'>Read Our Students Reviews</h1>


            <div className=" md:grid  grid-cols-2 gap-4">

                <div className={`glassyEffect p-3 m-2 hover:shadow-xl  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>

                    <img src="https://www.programming-hero.com/_next/image?url=https%3A%2F%2Fphero-web.nyc3.cdn.digitaloceanspaces.com%2Fwebsite-prod-images%2Fpublic%2Ffiles%2F1638420043484.jpg&w=96&q=75" alt="" className="rounded-full w-[10%] mx-auto" />
                    <blockquote className="text-lg italic font-medium text-center">"Learnify helps me a lot with my career like the team of this institute is very cooperative dedicated about their responsibility" </blockquote>
                    <div className="text-center text-gray-400 py-2">
                        <p>Sadia Afrin</p>
                    </div>
                    <div className="text-[#00b58b] justify-center py-2 flex gap-2"><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStar /></div>
                </div>

                <div className={`glassyEffect p-3 m-2 hover:shadow-xl  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>

                    <img src="https://www.programming-hero.com/_next/image?url=https%3A%2F%2Fphero-web.nyc3.cdn.digitaloceanspaces.com%2Fwebsite-prod-images%2Fpublic%2Ffiles%2F1613735826005.jpg&w=96&q=75" alt="" className="rounded-full w-[10%] mx-auto" />
                    <blockquote className="text-lg italic font-medium text-center">"Admitting Learnify was one of the best decisions in my life. Their teaching technique is completely unique. If anyone can do hard work then must be successful with the help of this course." </blockquote>
                    <div className="text-center text-gray-400 py-2">
                        <p>Rasal Ahmad</p>
                    </div>
                    <div className="text-[#00b58b] justify-center py-2 flex gap-2"><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /></div>
                </div>
            </div>

        </div>
    )
}

export default CustomerReviews