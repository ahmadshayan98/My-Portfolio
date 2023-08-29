import React from "react";
import ProfileIMG from "../Assets/ProfileIMG.jpg";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-700"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="py-3 text-4xl sm:text-6xl font-bold text-white">
            I'm a Developer in Progress
          </h2>
          <p className="text-gray-400 py-3 max-w-md">
            I'm always ambitious when it comes to learning something related to
            tech. I'm more of a nerd-guy when it comes to tech and stuff. I like
            to learn new things and practice them until I'm compitent enough to
            apply it in different aspects of my life. I'm currently learning
            programming development, and aiming to become an experienced and
            ambitious full-stack developer.
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-sky-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FiArrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="px-3 rounded-2xl mx-auto w-2/3 md:w-full">
          <img
            src={ProfileIMG}
            alt="My Profile Photo"
            className="mx-auto rounded w-3/4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
