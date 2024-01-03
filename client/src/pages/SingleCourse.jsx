// Import necessary dependencies
import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/data"; // Import the MenuList data
import PageNavigation from "./../components/PageNavigation";
import Rating from "./../components/Rating";
import { FaUserGraduate } from "react-icons/fa";
import { usePDF } from "react-to-pdf";

const SingleCourse = ({ darkMode }) => {
  const { id } = useParams();
  const dataList = data.MenuList;
  const curElem = dataList.find((x) => x._id === id);

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  if (!curElem) {
    return <p>Course not found</p>;
  }

  return (
    <div className="md:px-5 py-10" ref={targetRef}>
      {/* Navigation */}
      <div className="md:px-10 flex justify-between items-center">
        <div>
          <PageNavigation title={curElem.title} />
        </div>
        <div className="md:py-5">
          <Link
            className="md:px-10 underline text-lg hover:text-[#00b58b]"
            to={"/"}
          >
            Back to home
          </Link>
        </div>
      </div>
      <div className="text-center flex justify-center items-center gap-5">
        <h1 className="md:text-3xl text-xl font-medium">
          Download Course Outline
        </h1>
        <button className="btn" onClick={() => toPDF()}>
          Download PDF
        </button>
        {/* <div ref={targetRef}>Content to be generated to PDF</div> */}
      </div>
      {/* Main Part */}
      <div className={`glassyEffect p-3  ${darkMode && "hover:shadow-2xl "}`}>
        <div className=" md:flex flex-col  justify-center items-center ">
          <div className="px-5">
            <div className="w-full">
              <img src={curElem.title_image} alt={curElem.title} />
            </div>
            <h1 className="text-5xl font-medium py-1">{curElem.title}</h1>
            <div className="md:flex gap-2 items-center ">
              <img
                src={curElem.seller_image}
                alt={curElem.seller_name}
                width={75}
                className="rounded-full"
              />
              <h1 className="text-xl font-medium ">{curElem.seller_name}</h1>
            </div>
            {/* Part 2: curElem Name */}
            <div>
              <div className="md:flex gap-2 justify-between">
                <div className="flex gap-2 items-center">
                  <h1> Ratings : {curElem.rating}</h1>
                  <Rating rating={curElem.rating} />
                </div>
                <h1 className="text-2xl font-medium ">
                  price: $ {curElem.price}
                </h1>
                <h1 className="text-xl font-medium flex gap-2">
                  {curElem.num_reviews}
                  <FaUserGraduate size={25} />
                  Completed
                </h1>
              </div>

              <h1 className="text-xl pt-2"> {curElem.description}</h1>
              <h1 className="text-xl font-bold py-1"> {curElem.category}</h1>
              <h1 className="text-xl py-1">duration: {curElem.duration}</h1>
            </div>
          </div>
          <div></div>
        </div>

        <div className="px-5">
          <div className="py-3">
            <h1 className="text-2xl font-semibold py-1">Learn From Course</h1>
            <div className="border-2 border-slate-300 p-3">
              {curElem.learn_from_course.map((item, index) => (
                <h1 key={index}># {item}</h1>
              ))}
            </div>
          </div>

          <div className="py-3">
            <h1 className="text-2xl font-semibold py-1">Requirements:</h1>
            <div className="border-2 border-slate-300 p-3">
              {curElem.requirements.map((item, index) => (
                <h1 key={index}># {item}</h1>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link to={`/cart/${curElem._id}`}>
            <button className="btn">Get Premium Access</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
