"use client";
import { nanoid } from "nanoid";
import React, { useState } from "react";
import Navbar from "./Navbar";
const Technology = ({ technology }) => {
  const values = [
    { id: 0, text: "1" },
    { id: 1, text: "2" },
    { id: 2, text: "3" },
  ];
  const [activeId, setActiveId] = useState(0);
  const [activeTech, setActiveTech] = useState(0);
  return (
    <>
      <div
        id="technology"
        className="technology text-white px-[24px] overflow-y-scroll overflow-x-hidden z-1 relative h-[100vh] sm:pr-0 lg:overflow-y-hidden"
      >
        <Navbar />
        <div className="flex justify-center  gap-4 lg:text-[28px] lg:leading-[34px] lg:tracking-[4.7px] lg:justify-start lg:ml-[10%]">
          <h2 className="opacity-[0.25] tracking-[2.7px] leading-[19px]">03</h2>
          <h2 className="uppercase tracking-[2.7px] leading-[19px]">
            SPACE LAUNCH 101
          </h2>
        </div>
        <div className="text-center flex flex-col items-center mt-[2rem] mb-[1.7rem] sm:pr-[24px] lg:flex-row-reverse lg:px-[2rem] lg:justify-around lg:pr-0">
          <div className="flex flex-col items-center w-[120%] lg:w-[40%] lg:relative lg:left-[8%]">
            <img
              className="tech-image w-[100%] h-[10.9rem] sm:h-[20rem] lg:w-full lg:h-[65vh]"
              src={technology[activeTech].imageDesc}
              alt=""
              srcSet={`${technology[activeTech].images.landscape} 999w, ${technology[activeTech].images.portrait} 1000w`}
            />
          </div>
          <div className="mt-[32px] relative lg:flex lg:text-left lg:justify-start sm:w-[50%] lg:w-[40%] lg:gap-x-10">
            <ul className="flex justify-center gap-x-[1rem] mb-[32px] lg:flex-col  lg:gap-8 text-black">
              {values.map((val) => (
                <li
                  key={nanoid()}
                  id={activeId === val.id ? "activeTech" : "inactive"}
                  className="cursor-pointer text-white text-[1.5rem] border rounded-full px-[1rem] py-[.5rem] lg:px-[2.3rem] lg:py-[1.7rem] uppercase"
                  onClick={() => {
                    setActiveId(val.id);
                    setActiveTech(val.id);
                  }}
                >
                  {val.text}
                </li>
              ))}
            </ul>
            <div className="tech-detail">
              <h3 className="mb-[10px] uppercase opacity-[0.5] lg:text-[16px] lg:leading-[19px] lg:tracking-[ 2.7px]">
                The terminology...
              </h3>
              <h1 className="uppercase text-[24px] mb-[16px] lg:text-[56px] lg:leading-[64px]">
                {technology[activeTech].name}
              </h1>
              <h3 className="text-[#D0D6F9] leading-[25px] lg:text-[18px] lg:leading-[32px]">
                {technology[activeTech].description}{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technology;
