"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";

const Crew = ({ crew }) => {
  const values = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
  const [crewId, setCrewId] = useState(0);
  const [activeId, setActiveId] = useState(0);
  return (
    <>
      <div
        id="crew"
        className="crew text-white px-[24px] overflow-x-hidden z-1 relative h-[100vh] lg:overflow-y-hidden sm:pr-0"
      >
        <Navbar />
        <div className="flex justify-center  gap-4 lg:text-[28px] lg:leading-[34px] lg:tracking-[4.7px] sm:justify-start lg:ml-[10%] ">
          <h2 className="opacity-[0.25] tracking-[2.7px] leading-[19px]">02</h2>
          <h2 className="uppercase tracking-[2.7px] leading-[19px]">
            Meet your crew
          </h2>
        </div>
        <div className="text-center flex flex-col items-center mt-[2rem] mb-[1.7rem] sm:pr-[24px] sm:flex-col-reverse  sm:mb-0 lg:flex-row-reverse lg:px-[2rem] lg:justify-evenly">
          <div className=" flex flex-col  items-center after:w-[20rem] after:h-[1px] after:bg-[#383B4B] after:block sm:after:hidden lg:relative lg:self-end">
            <img
              className="crew-image w-[10rem] h-[10.9rem] sm:min-h-[56vh] sm:min-w-[30rem] lg:h-[79vh] lg:w-[35rem]"
              src={crew[crewId].images.webp}
              alt=""
            />
          </div>

          <div className="mt-[32px] relative  flex-col sm:flex sm:w-[60%] lg:text-left lg:justify-start lg:w-[40%]">
            <ul className="flex justify-center gap-x-[1rem] mb-[32px] sm:mt-12 sm:order-2 lg:justify-start lg:mt-[7rem]">
              {values.map((val) => (
                <li
                  id={activeId === val.id ? "activeCrew" : "inactive"}
                  className="cursor-pointer bg-white opacity-25 h-[10px] rounded-full px-[.3rem] lg:px-[.7rem] lg:py-[.7rem] uppercase"
                  onClick={() => {
                    setActiveId(val.id);
                    setCrewId(val.id);
                  }}
                >
                  <p></p>
                </li>
              ))}
            </ul>
            <div className="crew-detail lg:mb-8">
              <h3 className="mb-[10px] uppercase opacity-[0.5] lg:text-[32px] lg:leading-[37px]">
                {crew[crewId].role}
              </h3>
              <h1 className="uppercase text-[24px] mb-[16px] lg:text-[56px] lg:leading-[64px]">
                {crew[crewId].name}
              </h1>
              <h3 className="text-[#D0D6F9] leading-[25px] lg:text-[18px] lg:leading-[32px]">
                {crew[crewId].bio}{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
