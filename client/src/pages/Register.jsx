import React, { useState, useEffect } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { MdOutlineVisibility } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useUserAuth } from "../context/UserAuthContext";
import axios from "axios";

const Register = ({ darkMode }) => {
  const { signUp, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userImage, setUserImage] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    try {
      if (!name && !email && !password) {
        setError("Fill All Details");
      } else if (!name) {
        setError("please Enter your Name");
      } else if (!email) {
        setError("please Enter your email");
      } else if (!userImage) {
        setError("please Enter your userImage");
      } else if (!password) {
        setError("please Enter your password");
      } else if (password.length < 3)
        setError("password need minimum 3 character");
      else {
        const res = await axios.post(
          "https://learnify-api.vercel.app/api/register",
          {
            name,
            email,
            password,
            userImage,
          }
        );

        if (res && res.data.success) {
          navigate("/login");
        } else {
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="">
      <div className="py-16">
        <div
          className={`glassyEffect flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl hover:shadow-xl  ${
            darkMode && "hover:shadow-2xl hover:shadow-[#000000]"
          }`}
        >
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                'url("https://img.freepik.com/free-photo/3d-student-graduation-cap-books-stack_107791-15667.jpg")',
            }}
          />
          <form className="w-full p-8 lg:w-1/2" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold  text-center">
              Create an Account
            </h2>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-full" />
            </div>
            <Link
              href="#"
              className="flex items-center justify-center mt-4  rounded-lg shadow-md hover:bg-gray-100"
            >
              <div className="px-4 py-3"></div>
              <button
                onClick={handleGoogleSignIn}
                className="flex justify-center gap-5 items-center px-4 py-3 w-5/6 text-center text-gray-600 font-bold"
              >
                <FcGoogle size={30} />
                Sign in with Google
              </button>
            </Link>

            <div className="mt-4">
              <label className="block  text-sm font-bold mb-2">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-200 text-slate-950  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                placeholder="Enter Name"
              />
            </div>
            <div className="mt-4">
              <label className="block  text-sm font-bold mb-2">
                Email Address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 text-slate-950  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="email"
                placeholder="Enter email"
              />
            </div>
            <div className="mt-4">
              <label className="block  text-sm font-bold mb-2">Photo</label>
              <input
                onChange={(e) => setUserImage(e.target.value)}
                className="bg-gray-200 text-slate-950  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="text"
                placeholder="Enter Image Link"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block  text-sm font-bold mb-2">
                  Password
                </label>
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 text-slate-950  focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                type="password"
                placeholder="Enter Password"
              />
            </div>
            <p>{error} </p>
            <div className="mt-8">
              <button
                onClick={handleSubmit}
                className="btn font-bold py-2 px-4 w-full rounded "
              >
                Signup
              </button>
            </div>
            <div className="mt-4 flex justify-center items-center gap-2">
              <h1>Already have account ? </h1>
              <Link
                to="/login"
                className="hover:underline text-lg text-[#00b58b]"
              >
                signin
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
