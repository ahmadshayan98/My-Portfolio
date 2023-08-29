import React from "react";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-700 p-4 text-white"
    >
      <div className="max-w-screen-xl flex flex-col justify-center mx-auto h-screen">
        <div pb-8>
          <p className="text-4xl inline py-2 font-bold border-b-4 border-gray-300">
            Contact
          </p>
          <p className="py-6">
            Get in touch with me by filling the form below!
          </p>
        </div>

        <div className="py-8 flex justify-center items-center">
          <form
            action="https://getform.io/f/183befcb-2161-4c33-bb8a-f11c57f412a5"
            method="POST"
            className="flex gap-4 flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 border-2 rounded-md focus:outline-none bg-transparent text-white"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 border-2 rounded-md focus:outline-none bg-transparent text-white"
            />
            <textarea
              name="message"
              rows={10}
              className="bg-transparent border-2 rounded focus:outline-nones text-white p-2"
              placeholder="Write your message here"
            />
            <button className="text-white hover:scale-105 outline-none bg-gradient-to-b from-cyan-900 to-teal-600 rounded flex mx-auto px-6 py-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
