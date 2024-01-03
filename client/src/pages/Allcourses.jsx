import React, { useState } from "react";
import Course from "../components/Course";
import data from "../data/data.js";
import { Link } from "react-router-dom";

const AllCourses = ({ curElem, darkMode }) => {
  const [datas, setDatas] = useState(data.MenuList);

  const filterItem = (categItem) => {
    const updatedItems = data.MenuList.filter((curElem) => {
      return curElem.category === categItem;
    });
    setDatas(updatedItems);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center py-5">all course </h1>

      <div className="md:grid grid-cols-12">
        {/* part 1 */}
        <div className="col-span-3 flex flex-col items-center gap-y-5">
          <Link>
            <button
              className="bg-[#ffffff] text-[#00b58b] rounded-md border-[2px] border-[#00b58b] text-lg px-10 py-3 hover:text-[#ffffff] hover:bg-[#00b58b]"
              onClick={() => setDatas(data.MenuList)}
            >
              All Courses
            </button>
          </Link>
          <Link>
            <button
              className="menu-btn "
              onClick={() => filterItem("Web-Development")}
            >
              Web Development
            </button>
          </Link>
          <Link>
            <button
              className="menu-btn"
              onClick={() => filterItem("Python-Programming")}
            >
              Programming
            </button>{" "}
          </Link>{" "}
          <Link>
            <button
              className="menu-btn"
              onClick={() => filterItem("Machine-Learning")}
            >
              Machine Learning
            </button>
          </Link>{" "}
          <Link>
            <button
              className="menu-btn"
              onClick={() => filterItem("Data Structures & Algorithms")}
            >
              Data Structures
            </button>
          </Link>
          <Link>
            <button
              className="menu-btn"
              onClick={() => filterItem("Cybersecurity")}
            >
              Cybersecurity
            </button>
          </Link>
          <Link>
            <button className="menu-btn" onClick={() => filterItem("Robotics")}>
              Robotics Advance
            </button>{" "}
          </Link>
          <Link>
            <button className="menu-btn" onClick={() => filterItem("Database")}>
              Database Design
            </button>{" "}
          </Link>
          <Link>
            <button
              className="menu-btn"
              onClick={() => filterItem("Cloud-Computing")}
            >
              Cloud Computing
            </button>{" "}
          </Link>
        </div>

        {/* part 2 */}

        <div className="col-span-9 ">
          <div className="md:grid grid-cols-3 gap-4 px-10 ">
            {datas.map((curElem, i) => {
              return (
                <div
                  key={i}
                  className={`glassyEffect m-2  hover:shadow-xl  ${
                    darkMode && "hover:shadow-2xl hover:shadow-[#000000]"
                  }`}
                >
                  <div>
                    <img
                      src={curElem.title_image}
                      alt={curElem.title}
                      height={300}
                      width={500}
                      className="rounded-t-xl"
                    />
                  </div>
                  <div className="pl-2 py-2  p-5">
                    <h1 className="text-xl font-bold py-1">
                      {curElem.title.slice(0, 30)}
                    </h1>

                    <h1 className="font-medium py-1">
                      price: ${curElem.price}
                    </h1>
                    <div className="py-3">
                      <Link to={`/${curElem._id}`}>
                        <button className="px-3 py-2 bg-black text-white rounded hover:bg-white hover:text-black border-[2px] border-black ">
                          Enroll Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
