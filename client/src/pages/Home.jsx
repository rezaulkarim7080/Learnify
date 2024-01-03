/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import UpcommingCourses from "../components/UpcommingCourses";
import Team from "../components/Team";
import Package from "../components/Package";
import HomeBlogs from "../components/HomeBlogs";
import Faq from "../components/Faq";
import CustomerReviews from "../components/CustomerReviews";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="px-10 body">
      <Hero />
      <Benefits />
      <UpcommingCourses />
      <Team />
      <Package />
      <CustomerReviews />
      <HomeBlogs />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
