import React from "react";
import { Link } from "react-router-dom";
import { MdAdsClick } from "react-icons/md";
import stat from "../Assets/6572402_3270961.jpg";

function Content() {
  return (
    <div className="bg-back bg-cover">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img
          className="w-full dark:hidden"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
          alt="dashboard image"
        />

        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Unlock the Future of{" "}
            <span className="text-violet-700">NovaNudge</span>
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            At NovaNudge, we are pioneering innovative solution/service to
            revolutionize the way you solve a problem. Our commitment to
            excellence, cutting-edge technology, and customer satisfaction sets
            us apart. Join us on this transformative journey as we empower
            Customers to achieve new heights.
          </p>
          <Link
            to="/l"
            className="inline-flex items-center justify-center px-6 py-3 mr-3 text-base font-medium text-center text-white rounded-full bg-purple-700 hover:bg-purple-900 focus:ring-slate-950 "
          >
            Start Now
            <div className="w-5 h-5 ml-5 -mr-1 rotate-90 text-2xl">
              <MdAdsClick />
            </div>
          </Link>
        </div>
      </div>

      <div className="grid gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Elevate Your business Experience with{" "}
            <span className="text-pink-700">NovaNudge</span>
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            we are driven by a passion for transforming ordinary into
            extraordinary. Our service is designed to redefine the way you
            experience a benefit. Join a community of forward-thinkers who have
            chosen NovaNudge for its innovation, reliability, and unmatched
            quality. Ready to embark on a journey of excellence?
          </p>
          <Link
            to="#"
            className="inline-flex items-center justify-center px-6 py-3 mr-3 text-base font-medium text-center text-white rounded-full bg-pink-700 hover:bg-pink-900 focus:ring-slate-950 "
          >
            Explore Now
            <div className="w-5 h-5 ml-5 -mr-1 rotate-90 text-2xl">
              <MdAdsClick />
            </div>
          </Link>
        </div>
        <img className="w-full h-auto" src={stat} alt="dashboard image" />
      </div>
    </div>
  );
}

export default Content;
