import React from "react";

const Footbar = () => {
  return (
    <>
      <div className=" w-full bg-yellow-100">
        <div className="py-10 max-w-[1000px] mx-auto grid grid-cols-2 sm:grid-cols-4 justify-center items-center ">
          {/* 1st Element */}

          <div className="flex ">
            <img
              src="https://images.pexels.com/photos/1630588/pexels-photo-1630588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="w-20 h-20 rounded-full"
            />
            <h1 className="font-bold self-center text-green-600">
              {" "}
              <span className="text-6xl font-bold ">C</span>ompany
            </h1>
          </div>

          {/* 2nd Child */}
          <div>
            <ul className="">
              <li className="font-bold ">Main links</li>
              <li>Order Tracking</li>
              <li>New Order</li>
              <li>Contact Us</li>
              <li>News Blogs</li>
            </ul>
          </div>

          {/* 3rd Child */}

          <div>
            <ul className="">
              <li className="font-bold ">Support</li>
              <li>About US</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* 4th child */}
          
          <div>
            <ul className="grid gap-2">
              <li className="font-bold ">Support</li>
              <input
                type="text"
                placeholder="Enter The Email"
                className="placeholder:text-center"
              />

              <li>Follow Us</li>
              <div className="flex gap-4"></div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footbar;
