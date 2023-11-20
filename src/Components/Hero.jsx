import React from 'react'
import Navbar from './Navbar'
import hero from '../Assets/fpdl 1.png'

function Hero() {
  return (
    <div>
       <Navbar/>
       <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 min-h-screen">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-sans font-bold tracking-tight leading-none md:text-5xl xl:text-6xl text-black">
              Give away life's stuff
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-600 lg:mb-8 md:text-lg lg:text-xl mt-5 lg:mt-8 font-play">
              Whether you need help moving, delivering, shopping or recycling,
              our app instantly connects you with thousands of helpers -
              everyday people with a car and the time to help you out.
            </p>

            <a
              href="#"
              className="inline-flex items-center justify-center px-10 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-violet-800 hover:bg-violet-700 focus:ring-slate-950 "
            >
              Download App Now
              <svg
                className="w-5 h-5 ml-2 -mr-1 rotate-90"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>

            <a
              href="#"
              className=" mt-3 inline-flex items-center justify-center px-4 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-slate-200"
            >
              Learn More
            </a>

           
          </div>
    
          <div className=" hidden lg:mt-0 lg:col-span-5 lg:flex ml-5 mr-0 ">
 
            <img
              src= {hero}
              alt="mockup"
              className=" w-full h-full"
            />
          </div>
        </div>
      
    </div>
  )
}

export default Hero
