import React from "react";
import loginimg from "../assets/Home.jpg";
import Lottie from "lottie-react";
import teamImg from "../assets/teamwork.json";
import missionImg from "../assets/mission.json";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Top Banner */}
      <div className="relative">
        <img
          src={loginimg}
          alt="About Banner"
          className="object-cover w-full object-center h-[120px] sm:h-[250px]"
        />
        <div className="w-full h-full bg-black absolute top-0 left-0 opacity-40"></div>
        <h2 className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white font-semibold text-3xl md:text-5xl">
          About Us
        </h2>
      </div>

      {/* About Section */}
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Lottie animationData={teamImg} className="w-full" />
          </div>
          <div className="md:w-1/2 md:pl-16 md:mb-0 mb-10 text-center md:text-left">
            <h1 className="text-4xl font-semibold text-gray-900 mb-4">
              Your Favorite Shopping Marketplace
            </h1>
            <h2 className="text-3xl text-gray font-semibold mb-2">
              E-<span className="text-red-500">Shop</span>
            </h2>
            <p className="text-gray-700 text-base">
              E-Shop is one of Nepal's leading digital e-commerce platforms, offering a wide variety of quality products at affordable prices. Our goal is to make online shopping fast, easy, and reliable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="text-gray-700 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-16 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-4xl font-semibold text-red-600 ">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base">
              We believe shopping should be seamless and enjoyable. Every product is handpicked to meet high standards of quality, style, and affordability.
            </p>
            <p className="text-gray-700 text-base ">
              What sets us apart is our commitment to customer satisfaction. From browsing to delivery, our dedicated support team ensures a smooth and trusted shopping journey.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Lottie animationData={missionImg} className="w-full" />

           <div className=" flex justify-center">
  <div className="text-center max-w-xl mx-auto">
    <h3 className="text-xl font-semibold text-red-600">Join the E-Shop Family</h3>
    <p className="text-gray-700 mb-4">
      Whether you're a tech enthusiast, a professional, or just looking for something cool and functional — E-Shop
    </p>
    <div className="mt-6">
      <Link to="/products">
        <button className="bg-red-600 text-white px-6 py-2 rounded-xl hover:bg-red-700 transition">
          Start Shopping
        </button>
      </Link>
    </div>
  </div>

          </div>
          
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
