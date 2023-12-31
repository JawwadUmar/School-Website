import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = ({isOpen, setisOpen}) => {
  const [dropdown, setdropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Close the menu if the screen size is larger than medium
      if (window.innerWidth > 768 && isOpen) {
        setisOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setisOpen]);

  const handleMouseOver = () => {
    setdropdown(!dropdown);
  };

  return (
    <nav className="flex justify-between items-center mx-auto px-4 h-24 text-[#30475E] bg-white w-full sticky top-0 z-50"
    >
      {isOpen ? (
        <h1></h1>
      ) : (
        <h1 className="w-full text-3xl font-bold">St Mary High School</h1>
      )}
      <ul className="list-none hidden md:flex text-xl">
        <li className="p-4 btn">Home</li>
        <li className="p-4 btn">About</li>
        <li className="p-4 btn">Contact</li>
        <li
          className="p-4 btn"
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}
        >
          More
          {dropdown && (
            <ul className="relative top-12 bg-white border border-gray-200 ">
              <li className="p-2">Admission</li>
              <li className="p-2">Gallery</li>
              <li className="p-2">Alumni</li>
              <li className="p-2">Calendar</li>
            </ul>
          )}
        </li>
        <li className="p-4 btn">Login</li>
      </ul>

      <div onClick={()=>{setisOpen()}} className="block md:hidden">
        {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          isOpen
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          Educators Online
        </h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">More</li>

        <li className="p-4 border-b border-gray-600">Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
