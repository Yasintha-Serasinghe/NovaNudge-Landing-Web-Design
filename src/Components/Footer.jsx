import React from 'react'
import { DiDrupal } from "react-icons/di";

function Footer() {
  return (
    <div>
      <footer className="footer p-10  bg-slate-800 text-white rounded-t-2xl">
     
  <aside>
    <div className=' text-8xl'><DiDrupal/></div>
  
    <p>NovaNudge (pvt) Ltd.<br/>Providing reliable tech since 2020</p>
    <aside className=' justify-items-center'>
    <p>Copyright © 2023 - All right reserved by NovaNudge Industries Ltd</p>
  </aside>
  </aside> 
  
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
</footer>
      
    </div>
  )
}

export default Footer
