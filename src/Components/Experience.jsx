import React from "react";
import html5 from "../Assets/html5.png";
import css3 from "../Assets/css3.png";
import js from "../Assets/js.png";
import react from "../Assets/react.png";
import nodejs from "../Assets/nodejs.png";
import python from "../Assets/python.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html5,
      title: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      src: css3,
      title: "CSS",
      style: "shadow-sky-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "React JS",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-600",
    },
    {
      id: 6,
      src: python,
      title: "Python",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="Experience"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-700 text-gray-300"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-300 p-2 inline">
            Experience
          </p>
          <p className="py-4">The languages I am working on</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md shadow-orange-700 hover:scale-105 duration-500 ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 mb-4 text-xl">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
