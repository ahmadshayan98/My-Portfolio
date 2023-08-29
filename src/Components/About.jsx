import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-700 text-gray-300"
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold text-white inline border-b-4 border-gray-300">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          Hi! My name is Ahmad Shayan Tariq, and I'm from Lahore, Pakistan.
          Calisthenics workout, anime fan, and a foodie at heart. I'm an
          ambitious person, seeking to explore new things in life. I believe in
          experiencing and observing to grow and to smartly work with
          consistency to achieve goals. I have an experience of 5+ years in
          providing awesome customer service, admin support, data management,
          virtual assistance and other management roles.
        </p>

        <br />
        <br />

        <p className="text-xl">
          With my experience, and exposure throughout in different fields of
          businesses, I have developed the skills of quick adaptability and
          learning. It has also helped me to be more detail-oriented and
          organized. My skill-set enables me to deliver the best services to my
          clients, helpling them achieve their business goals and growth they
          are aiming for.
        </p>

        <br />
        <br />

        <p className="text-xl">
          I'm always open to new challenges and to learn new things to
          experience and grow. I'm fond of researching, and applying new
          concepts in my lifestyle. This also enables me to see through a
          broader perspective. I'm looking forward to working with you!
        </p>
      </div>
    </div>
  );
};

export default About;
