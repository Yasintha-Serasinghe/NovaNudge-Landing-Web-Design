import React from 'react';
import Hero from '../Components/Hero';
import Navbar from '../Components/Navbar';

function Main() {
  
  return (
    <div>
      <section className='relative'>
      <div className='absolute top-0 lg:top-9 lg:mx-36'>
          <Hero />
        </div>
        <div className='hidden lg:block'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className=''>
            <path fill="#5000ca" fillOpacity="1" d="M0,320L48,293.3C96,267,192,213,288,197.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>

         
        </div>
        <Navbar/>
       {/*  <div className='absolute top-0 lg:top-6 lg:mx-36'>
          <Hero />
        </div> */}
      </section>
    </div>
  );
}

export default Main;

