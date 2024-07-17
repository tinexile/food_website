import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import hd from "../img/images/grid_image1.png";

const Navbar = () => {
  return (
    <>
      <div className=" max-w-[1200px] mx-auto  py-6 flex justify-around items-center">
        <div className="flex ">
          <img
            src="https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-20 h-20 rounded-full"
          />
          <h1 className="font-bold self-end text-green-600">
            {" "}
            <span className="text-6xl font-bold ">C</span>ompany{" "}
          </h1>
        </div>

        <IoMenuSharp size={50} />
      </div>

      {/* <div className="absolute top-0 left-[50%] translate-x-[-50%] bg-red-400 w-screen text-center">
        <ul className="grid gap-10 my-10 font-bold text-2xl">
          <li className="bg-red-600 " >Home</li>
          <li>About</li>
          <li>Section</li>
          <li>Menu</li>
        </ul>
      </div> */}
    </>
  );
};

export default Navbar;
