"use client";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import Navbar from "./Navbar";
const Destination = ({ destinations }) => {
  const values = [
    { id: 0, text: "Moon" },
    { id: 1, text: "Mars" },
    { id: 2, text: "Europa" },
    { id: 3, text: "Titan" },
  ];
  const [destinationsId, setdestinationsId] = useState(0);
  const [activeId, setActiveId] = useState(0);
  return (
    <>
      <div
        id="destination"
        className="destination text-white px-[24px] overflow-x-hidden z-1 relative h-[100vh] sm:pr-0"
      >
        <Navbar />
        <div className="flex justify-center gap-4 lg:text-[28px] lg:leading-[34px] lg:tracking-[4.7px] sm:justify-start lg:ml-[10%] lg:mb-16">
          <h2 className="opacity-[0.25] tracking-[2.7px] leading-[19px]">01</h2>
          <h2 className="uppercase tracking-[2.7px] leading-[19px]">
            Pick your destination
          </h2>
        </div>
        <div className="text-center flex flex-col items-center mt-[2rem] sm:pr-[24px] lg:flex-row lg:justify-evenly ">
          <img
            className="planet-image w-[40%] h-[40%] lg:w-[30%]"
            src={destinations[destinationsId].images.webp}
            alt=""
          />
          <div className="planet-detail lg:w-[30%] sm:w-[80%] lg:text-start">
            <div className="mt-[1.5rem] relative ">
              <ul className="flex justify-around mb-[1rem] lg:justify-start lg:gap-x-8">
                {values.map((val) => (
                  <li
                    key={nanoid()}
                    id={activeId === val.id ? "activePlanet" : "inactive"}
                    className="cursor-pointer uppercase"
                    onClick={() => {
                      setActiveId(val.id);
                      setdestinationsId(val.id);
                    }}
                  >
                    {val.text}
                  </li>
                ))}
              </ul>
              <div className="after:w-[95%] after:mx-auto after:my-0 after:h-[1px] after:bg-[#383B4B] after:block after:relative after:bottom-[-2rem] lg:after:w-full">
                <h1 className="uppercase text-[80px] leading-[100px]">
                  {destinations[destinationsId].name}
                </h1>
                <h3 className="text-[#D0D6F9] leading-[25px]">
                  {destinations[destinationsId].description}{" "}
                </h3>
              </div>
            </div>
            <div className=" mt-[64px] mb-8 sm:flex sm:gap-x-[10rem] sm:justify-center lg:justify-start">
              <div className="mb-[2rem]">
                <h2 className="uppercase leading-[17px] tracking-[2.3px]  text-[14px] mb-4">
                  Avg. distance
                </h2>
                <h1 className="text-[28px] leading-[32px]">
                  {destinations[destinationsId].distance}
                </h1>
              </div>
              <div>
                <h2 className="uppercase leading-[17px] tracking-[2.3px] text-[14px] mb-4">
                  est. travel time
                </h2>
                <h1 className="text-[28px] leading-[32px]">
                  {destinations[destinationsId].travel}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
