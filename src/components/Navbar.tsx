import { FaRegHeart, FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "utils/context";

const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className="navbar sticky top-0 z-20 bg-zinc-300 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-300">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <div className="text-[1.5rem]">
              <FaBars />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-2 p-2 shadow menu menu-compact dropdown-content rounded-box w-48 bg-zinc-300 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-300"
          >
            <li>
              <Link to="/favorite" className="md:hidden">
                Favorites
              </Link>
            </li>
            <li>
              <a className="justify-between">
                Dark Mode
                <span className="badge">
                  <label className="swap">
                    <input type="checkbox" onClick={() => handleTheme()} />
                    <div className="swap-on">ON</div>
                    <div className="swap-off">OFF</div>
                  </label>
                </span>
              </a>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="justify-center normal-case font-[1000] italic text-2xl text-red-600 hidden md:flex md:ml-5"
        >
          MOVIX
        </Link>
      </div>
      <div className="navbar-center">
        <Link
          to="/"
          className="justify-center normal-case font-[1000] italic text-2xl text-red-600 md:hidden"
        >
          MOVIX
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <div className="text-[1.5rem]">
              <FaSearch />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-2 shadow menu menu-compact dropdown-content rounded-box w-fit bg-zinc-300 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-300"
          >
            <li>
              <div className="md:hidden form-control">
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered bg-zinc-50 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-300"
                />
              </div>
            </li>
          </ul>
        </div>
        <label className="swap swap-rotate hidden md:grid md:mx-3">
          <input type="checkbox" onClick={() => handleTheme()} />
          <svg
            className="swap-on fill-current w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
          <svg
            className="swap-off fill-current w-8 mh-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
        </label>
      </div>
      <Link to="/favorite" className="text-[1.7rem] mx-3 hidden md:flex">
        <FaRegHeart />
      </Link>
      <div className="hidden form-control w-fit mx-5 md:flex">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered bg-zinc-50 text-zinc-900 dark:bg-zinc-700 dark:text-zinc-300"
        />
      </div>
    </div>
  );
};

export default Navbar;
