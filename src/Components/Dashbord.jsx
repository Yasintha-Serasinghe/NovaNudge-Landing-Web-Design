
import { Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import Cardbanner from "./Cardbanner";
import DashForm from "./DashForm";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {DiDrupal} from "react-icons/di";


function Dashboard() {

  

  return (
    <div>
      <div className="lg:hidden">
        {/* Render default content for small to medium screens */}
      </div>
      <div className="lg:flex">
        {/* Render content for large screens */}
        <div className="drawer drawer-start lg:drawer-open">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">

              {/** Drawer open button */}
              <label
                  htmlFor="my-drawer-4"
                  className="drawer-button text-xl px-2 btn lg:hidden"
                >
                  <CgMenuGridO />
                </label>
            {/* Nav Bar*/}
            

            {/* Banner */}
            <Cardbanner />

            {/* Dashboard form */}
            <div className="mt-6 lg:py-10">
              <DashForm />
            </div>
          </div>

          <div className="drawer-side">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu p-4 w-64 min-h-full bg-base-200 text-base-content py-6 lg:bg-violet-700">
              {/* Sidebar content here */}
              <div
            className="font-bold text-3xl cursor-pointer flex items-center  
      text-gray-800 md:text-white mb-4"
          >
            <span className="text-5xl text-black md:text-white mr-1 pt-1">
              <DiDrupal />
            </span>
            NovaNudge
          </div>
              <li className="py-2 lg:py-3 mt-0 lg:mt-14">
                <Link
                  to="/"
                  className="text-black font-bold lg:text-white text-lg"
                >
                  Home 
                </Link>
              </li>
              <li className="py-2 lg:py-3">
                <Link
                  to="/about"
                  className="text-black font-bold lg:text-white text-lg"
                >
                  About 
                </Link>
              </li>
              <li className="py-2 lg:py-3 ">
                <Link
                  to="/faq"
                  className="text-black font-bold lg:text-white text-lg"
                >
                  Faq 
                </Link>
              </li>
              <li className="py-2 lg:py-3 ">
                <Link
                  to="/contact"
                  className="text-black font-bold lg:text-white text-lg"
                >
                  Contact
                </Link>
              </li>
              <li className="py-2 lg:py-3 ">
                <Link
                  to="/logout"
                  className="text-black font-bold lg:text-white text-lg"
                >
                  Log-out 
                </Link>
              </li>
              <li className="drawer-button font-bold text-xl  btn lg:hidden">
                <label htmlFor="my-drawer-4">
                  <IoIosCloseCircleOutline />
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
