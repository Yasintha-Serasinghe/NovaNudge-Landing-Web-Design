import React from 'react';
import { Link } from 'react-router-dom';
import { DiDrupal } from "react-icons/di";

function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-slate-800 text-white rounded-t-2xl">

        <aside>
          <div className='text-8xl'><DiDrupal /></div>
          <p>NovaNudge (pvt) Ltd.<br />Providing reliable tech since 2020</p>
          <aside className='justify-items-center'>
            <p>Copyright © 2023 - All right reserved by NovaNudge Industries Ltd</p>
          </aside>
        </aside>

        <nav>
          <header className="footer-title">Services</header>
          <Link to="/" className="link link-hover">Branding</Link>
          <Link to="/" className="link link-hover">Design</Link>
          <Link to="/" className="link link-hover">Marketing</Link>
          <Link to="/" className="link link-hover">Advertisement</Link>
        </nav>

        <nav>
          <header className="footer-title">Company</header>
          <Link to="/" className="link link-hover">About us</Link>
          <Link to="/" className="link link-hover">Contact</Link>
          <Link to="/" className="link link-hover">Jobs</Link>
          <Link to="/" className="link link-hover">Press kit</Link>
        </nav>

        <nav>
          <header className="footer-title">Legal</header>
          <Link to="/" className="link link-hover">Terms of use</Link>
          <Link to="/" className="link link-hover">Privacy policy</Link>
          <Link to="/" className="link link-hover">Cookie policy</Link>
        </nav>

      </footer>
    </div>
  );
}

export default Footer;
