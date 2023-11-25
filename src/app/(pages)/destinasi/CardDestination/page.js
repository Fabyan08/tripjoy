"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";

const DestinationCard = ({ destination }) => {
  // Perform null checks before accessing properties
  if (!destination || typeof destination !== "object") {
    // Handle the case where destination is undefined or not an object
    return null;
  }

  // Destructure properties with default values to avoid potential undefined issues
  const {
    date = "",
    location = "",
    description = "",
    price = 0,
    rating = 0,
  } = destination;

  return (
    <div className="w-full bg-[url('/assets/img/destinasi/1.png')] bg-cover rounded-xl h-96 object-cover">
      <div className="flex relative items-end h-full justify-center">
        <div className="h-40 w-full p-2 hover:text-gray-800 bg-white/30 text-white border-2 border-white backdrop-blur-xl hover:bg-gray-200  duration-200 hover:scale-[1.02] rounded-b-xl">
          <div className="bg-white w-14 h-14 -mt-8 rounded-xl shadow-md">
            <h1 className="text-lg text-gray-800 text-center font-semibold">
              <span className="text-blue-500 font-bold">{date}</span> Dec
            </h1>
          </div>
          <h1 className="font-bold">{location}</h1>
          <hr className="px-4 my-1 " />
          <h1 className="text-sm">{description}</h1>
          <div className="flex justify-between">
            <div className="flex">
              <h1 className="flex space-x-2 items-center">
                Rp{price.toLocaleString()} ({rating}{" "}
                <FaStar className="text-yellow-300" />)
              </h1>
            </div>
            <button className="bg-white/60 text-blue-500 duration-300 hover:bg-white hover:shadow-md hover:border-2 hover:border-blue-500 rounded-full">
              <a href="/detail">
                <MdNavigateNext className="text-4xl" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
