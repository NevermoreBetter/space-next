import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <div
        id="home"
        className="text-white flex flex-col overflow-hidden  px-[24px] h-[100vh] sm:pr-0 "
      >
        <Navbar />
        <div className="text-center flex flex-col justify-between items-center sm:pr-[24px] sm:mt-[100px]  lg:flex-row lg:mt-[210px] lg:px-[7rem] lg:justify-evenly lg:gap-x-[20rem]">
          <div className="lg:w-[35%] sm:mb-[140px] lg:text-start">
            <h2 className="tracking-[2.7px] leading-[19px] text-[#D0D6F9] mb-8 lg:text-[28px] lg:leading-[34px] lg:tracking-[4.7px]">
              SO, YOU WANT TO TRAVEL TO
            </h2>
            <h1 className="text-[80px] leading-[100px] mb-8 lg:text-[150px] lg:leading-[172px] lg:mb-[1.5rem]">
              SPACE
            </h1>
            <p className="leading-[25px] text-center text-[#D0D6F9] mb-8 lg:leading-[32px] lg:text-start">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <Link href="/destination">Explore</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
