import React from "react";

import illustration_1 from "../assets/images/illustration_1.svg";

const ImageSection = () => {
  return (
    <div className="h-screen w-1/2 fixed top-0 flex items-center justify-center">
      <img src={illustration_1} className="" alt="bg" />
      {/* <div className="absolute flex flex-col justify-end bg-black bg-opacity-40 z-30 top-0 left-0 w-full h-full">
        <ul
          className="list-disc list-inside px-5 py-4 font-medium space-y-1 text-gray-200"
          style={{ fontSize: "1rem" }}
        >
          <li>
            <span className="relative" style={{ left: "-10px" }}>
              We leverage business historical bank to determine appropriate
              financing
            </span>
          </li>
          <li>
            <span className="relative" style={{ left: "-10px" }}>
              Businesses that are fully on-boarded are funded within 3-4 hours
              of credit request
            </span>
          </li>
          <li>
            <span className="relative" style={{ left: "-10px" }}>
              Our funds help businesses plug gaps in working capital essential
              to steady growth
            </span>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default ImageSection;
