import React from 'react';
import { CgMenuGridO } from "react-icons/cg";
import Cardbanner from './Cardbanner';
import DashForm from './DashForm';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";

function Dashboard() {
  return (
    <div>
      <div className="lg:hidden">
        {/* Render default content for small to medium screens */}
        {/* ... */}
      </div>
      <div className="lg:flex">
        {/* Render content for large screens */}
        <div className="drawer drawer-start lg:drawer-open">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}



{/* Nav Bar*/}
            <div className="navbar shadow-xl" style={{backgroundColor:"#6c2bd9"}}>
  <div className="flex-1">
    {/** Drawer open button */}
  <label htmlFor="my-drawer-4" className="drawer-button text-xl px-2 btn lg:hidden">
            <CgMenuGridO />
            </label>
    <div className=" mx-3 text-xl text-white font-bold">NovaNudge</div>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-auto h-8" />
    </div>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.freepik.com/free-photo/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop_23-2148029483.jpg?size=626&ext=jpg&uid=R96377878&ga=GA1.1.309264521.1679383314&semt=sph" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <div className="flex items-center justify-center text-blue-900 font-serif font-bold">
            Alexa Perera
            
          </div>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>

{/**Banner  */}
<Cardbanner/>

{/**dash board form */}
<div className=' mt-6 lg:py-10'>
    <DashForm/>
</div>



           {/* Drawer contents*/}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content py-6">
              {/* Sidebar content here */}
              <li className=' py-2 lg:py-3'>
                <a className=' font-bold font-mono bg-violet-200 rounded-full lg:text-3xl'>Home <FaHome /></a>
              </li>
              <li className=' py-2 lg:py-3'>
                <a className=' font-bold font-mono bg-violet-200 rounded-full lg:text-3xl'>About <MdOutlineRoundaboutLeft/></a>
              </li>
              <li className=' py-2 lg:py-3 '>
                <a className=' font-bold font-mono bg-violet-200 rounded-full lg:text-3xl'>Faq <FaQuestionCircle/></a>
              </li>
              <li className=' py-2 lg:py-3 '>
                <a className=' font-bold font-mono bg-violet-200 rounded-full lg:text-3xl'>Contact <MdContacts/></a>
              </li>
              <li className=' py-2 lg:py-3 '>
                <a className=' font-bold font-mono bg-red-600 hover:bg-red-700 lg:text-2xl'>Log-out <IoMdLogOut/></a>
              </li>
              <li className="drawer-button font-bold text-5xl btn lg:hidden">
              <label htmlFor="my-drawer-4"><IoIosCloseCircleOutline /></label>
              </li>
            </ul>
            {/* Close button for small devices */}
           {/*  <div >
              <label htmlFor="my-drawer-4">Close drawer</label>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
