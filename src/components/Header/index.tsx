import React from "react";
import logo from "../../logo.png";
function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  return (
    <div className="bg-[#151F2A] px-6 h-16 flex items-center justify-between">
      <img src={logo} alt="logo" className="w-[100px]" />

      <ul className={`list-none sm:absolute sm:bg-slate-400 sm:text-white sm:right-0 md:hidden duration-1000 z-0 text-white ${isNavOpen ?`top-16` : `top-[-1000px]`}`}>
        <li className="px-6 font-semibold text-[17px] hover:opacity-50">Home</li>
        <li className="px-6 font-semibold text-[17px] hover:opacity-50">About us</li>
        <li className="px-6 font-semibold text-[17px] hover:opacity-50">Feature</li>
        <li className="px-6 font-semibold text-[17px] hover:opacity-50">Contact us</li>
      </ul>

      <ul className={`list-none md:flex text-white sm:hidden`}>
        <li className="px-6 font-semibold text-[17px]">Home</li>
        <li className="px-6 font-semibold text-[17px]">About us</li>
        <li className="px-6 font-semibold text-[17px]">Feature</li>
        <li className="px-6 font-semibold text-[17px]">Contact us</li>
      </ul>

      <ul
        className="sm:block md:hidden flex flex-col"
        onClick={() => setIsNavOpen((pre) => !pre)}
      >
        <li className="w-[20px] h-[2px] bg-white my-1"></li>
        <li className="w-[20px] h-[2px] bg-white my-1"></li>
        <li className="w-[20px] h-[2px] bg-white my-1"></li>
      </ul>
    </div>
  );
}

export default Header;
