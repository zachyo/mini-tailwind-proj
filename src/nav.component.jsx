import { useState } from "react";
import logo from "./img/logo.svg";

const Navbar = () => {
  // const btn = document.getElementsById('menu-btn')
  const [className, SetClassName] = useState("hamburger block md:hidden");
  const [menu, SetMenu] = useState("hidden");
  const change = (className) => {
    if (className === "hamburger block md:hidden") {
      SetClassName("open hamburger block md:hidden");
      SetMenu("");
      console.log(className);
    } else {
      SetClassName("hamburger block md:hidden");
      SetMenu("hidden");
    }
  };
  return (
    <nav className="relative container mx-auto p-4">
      {/* Flex Container  */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src={logo} alt="logo" />
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-10 md:flex">
          <a href="/" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="/" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <a
          href="/"
          className="hidden  p-3 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
        >
          Get Started
        </a>

        {/* Hamburger */}
        <button
          id="menu-btn"
          className={className}
          onClick={() => {
            change(className);
          }}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-btm"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={menu}>
        <div
          id="menu"
          className="absolute flex flex-col items-center self-end py-8 mt-2 space-y-6 font-bold bg-white left-6 right-6 drop-shadow-md md:hidden sm:w-auto sm-self-center "
        >
          <a href="/">Pricing</a>
          <a href="/">Product</a>
          <a href="/">About Us</a>
          <a href="/">Careers</a>
          <a href="/">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
