import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-col px-5 my-4 space-y-5 navbar bg-base-100 md:flex-row lg:px-20 md:space-y-0 md:mb-6">
        <div className="flex-1">
          <img src="/Logo.png" alt="" className="h-[72px]" />
        </div>
        <div className="flex-none">
          <ul className="px-1 text-lg font-medium menu menu-horizontal">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/donations">Donation</NavLink>
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
