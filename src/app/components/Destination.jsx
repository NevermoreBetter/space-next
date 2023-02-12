import React from "react";
import Navbar from "./Navbar";
const Destination = (props) => {
  return (
    <>
      <Navbar />
      <div>{props.destinations[0].name}</div>
    </>
  );
};

export default Destination;
