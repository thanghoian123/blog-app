import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth, providers } from "../../firebase";
import logo from "../../logo.png";
import Avatar from "../Avatar";
function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [user] = useAuthState(auth);

  return (
    <div className="bg-[#151F2A] px-6 h-16 flex items-center justify-between">
      <img src={logo} alt="logo" className="w-[100px]" />

      <ul className={`list-none sm:absolute sm:bg-slate-400 sm:text-white sm:right-0 md:hidden duration-1000 z-0 text-white ${isNavOpen ? `top-16` : `top-[-1000px]`}`}>
        <li className="px-6 font-semibold text-[17px] cursor-pointer hover:opacity-50"><Link to="/">Home</Link></li>
        <li className="px-6 font-semibold text-[17px] cursor-pointer hover:opacity-50">About us</li>
        <li className="px-6 font-semibold text-[17px] cursor-pointer hover:opacity-50"><Link to="postEditor">Manage</Link></li>
        <li className="px-6 font-semibold text-[17px] cursor-pointer hover:opacity-50">Contact us</li>
      </ul>

      <ul className={`list-none md:flex text-white sm:hidden`}>
        <li className="px-6 font-semibold text-[17px] cursor-pointer"><Link to="/">Home</Link></li>
        <li className="px-6 font-semibold text-[17px] cursor-pointer">About us</li>
        <li className="px-6 font-semibold text-[17px] cursor-pointer"><Link to="postEditor">Manage</Link></li>
        <li className="px-6 font-semibold text-[17px] cursor-pointer">Contact us</li>
        {!user ? <li className="px-6 font-semibold text-[17px] cursor-pointer" onClick={() => {
          providers.signInWithGoogle()
        }}>Sign in</li> : <li className="flex px-6 font-semibold text-[17px] cursor-pointer">
          <p className="mr-1" onClick={providers.logout}>Sign out</p>
          <Avatar
            src={user?.photoURL as string}
          />
        </li>}


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
