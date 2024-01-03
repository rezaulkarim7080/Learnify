import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import data from "../data/data"; // Import the MenuList data
import PageNavigation from "./../components/PageNavigation";
import Rating from "./../components/Rating";
import { FaUserGraduate } from "react-icons/fa";
import { usePDF } from "react-to-pdf";

const Cart = ({ darkMode }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dataList = data.MenuList;
  const curElem = dataList.find((x) => x._id === id);

  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });

  return (
    <div className="md:px-5 py-10 h-screen" ref={targetRef}>
      {/* Navigation */}
      <div className="md:px-10 px-5 md:flex justify-between items-center">
        <div>
          <PageNavigation title={curElem.title} cartTitle={curElem._id} />
        </div>
        <div className="py-5 px-10 ">
          <Link className="underline hover:text-[#00b58b]" to={"/"}>
            Back to home
          </Link>
        </div>
      </div>

      {/* Main Part */}

      <div className="px-20 flex justify-center flex-col ">
        <h1 className="text-2xl font-medium py-1 text-center">Order Summary</h1>
        <div>
          <div
            className={`glassyEffect  flex flex-col md:p-10 p-5 bg-slate-50 rounded-xl  ${
              darkMode && "hover:shadow-2xl "
            }`}
          >
            <div className="md:flex justify-between md:gap-10 py-2 ">
              <h1 className="text-xl font-medium py-1">Sold By : Learnify</h1>
              <h1 className="text-xl font-medium py-1">Learnify@gmail.com</h1>
            </div>

            <div className="md:flex  justify-between md:gap-10 py-2">
              <h1 className="text-xl font-medium py-1">Sold To :User name </h1>
              <h1 className="text-xl font-medium py-1">user Profile</h1>
            </div>

            <div className="md:flex  justify-between md:gap-10 py-2">
              <h1 className="text-xl font-medium py-1">Course Title</h1>
              <h1 className="text-xl font-medium py-1">{curElem.title}</h1>
            </div>
            <div className="md:flex  justify-between md:gap-10 py-2">
              <h1 className="text-xl font-medium py-1">Total items </h1>
              <h1 className="text-xl font-medium py-1">1</h1>
            </div>
            <div className="md:flex  justify-between md:gap-10 py-2">
              <h1 className="text-xl font-medium py-1">Total Price </h1>
              <h1 className="text-xl font-medium py-1">${curElem.price}</h1>
            </div>
          </div>
          <div className="flex justify-center">
            <NavLink to={"/"} className="btn">
              PayMent
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
