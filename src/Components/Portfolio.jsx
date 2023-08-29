import React from "react";
import Contentportfolio from "../Assets/Contentportfolio.jpg";
import { FiVideo } from "react-icons/fi";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Contentportfolio,
    },
    {
      id: 2,
      src: Contentportfolio,
    },
    {
      id: 3,
      src: Contentportfolio,
    },
    {
      id: 4,
      src: Contentportfolio,
    },
    {
      id: 5,
      src: Contentportfolio,
    },
    {
      id: 6,
      src: Contentportfolio,
    },
  ];

  return (
    <div
      name="Portfolio"
      className="py-6 text-white w-full bg-gradient-to-b from-black to-gray-800 md:h-screen"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-400 rounded-lg">
              <img
                src={src}
                alt=""
                className="cursor-pointer hover:scale-105 rounded-md duration-500"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
