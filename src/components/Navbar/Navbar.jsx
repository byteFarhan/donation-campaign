import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 flex flex-col md:flex-row px-5 lg:px-20 my-4 space-y-5 md:space-y-0 md:mb-6">
        <div className="flex-1">
          <img src="/Logo.png" alt="" className="h-[72px]" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/donation">Donation</NavLink>
            </li>
            <li>
              <NavLink to="/statistics">Statistics</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
