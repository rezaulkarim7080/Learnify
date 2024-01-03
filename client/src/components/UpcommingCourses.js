import React from 'react';
import Course from './Course';

const UpcomingCourses = ({ darkMode }) => {



  return (
    <div className='pt-5'>
      <h1 className='heading'>UpcomingCourses </h1>
      <h1 className='subHeading'>New Courses
      </h1>
      <div className='md:flex justify-around gap-5'>
        {/* part 1 */}
        <div className={`glassyEffect m-2  hover:shadow-xl  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>
          <div>
            <img
              src="https://contentstatic.techgig.com/photo/80100245/8-steps-to-master-python-programming-for-data-science.jpg?88712"
              alt="Programming"
              height={300}
              width={400}
              className="rounded-t-xl"
            />
          </div>
          <div className="pl-2 py-2">
            <h1 className="text-xl font-bold py-1">Programming Mastery</h1>
            <h1 className="font-medium py-1">price: $79.99</h1>
          </div>
        </div>
        {/* part 2 */}
        <div className={`glassyEffect m-2  hover:shadow-xl  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>
          <div>
            <img
              src="https://img-c.udemycdn.com/course/480x270/164058_e914_2.jpg"
              alt="Programming"
              height={300}
              width={400}
              className="rounded-t-xl"
            />
          </div>
          <div className="pl-2 py-2">
            <h1 className="text-xl font-bold py-1">Excel Programmer Course</h1>
            <h1 className="font-medium py-1">price: $100.99</h1>
          </div>
        </div>
        {/* part 3 */}
        <div className={`glassyEffect m-2  hover:shadow-xl  ${darkMode && "hover:shadow-2xl hover:shadow-[#000000]"}`}>
          <div>
            <img
              src="https://img-c.udemycdn.com/course/480x270/18237_c39e_10.jpg"
              alt="Programming"
              height={300}
              width={400}
              className="rounded-t-xl"
            />
          </div>
          <div className="pl-2 py-2">
            <h1 className="text-xl font-bold py-1">Java Swing (GUI) Programming</h1>
            <h1 className="font-medium py-1">price: $150.99</h1>
          </div>
        </div>










      </div>
    </div>
  );
};

export default UpcomingCourses;
