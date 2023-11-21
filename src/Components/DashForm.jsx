import React from 'react'

function DashForm() {
  return (
    <div>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className=' h-auto w-auto border-0 md:border-r-4 p-4 font-extrabold text-center md:text-2xl'>
                Upload Your Image To Generate Link

                <div className="card shrink-0 w-full max-w-sm shadow-xl mx-auto opacity-70 mt-2">
      <form className="card-body">
        <div className="flex items-center justify-center w-full">
      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </div>
      </form>
    </div>
            </div>
            <div className=' text-2xl font-bold text-center'>
                Your Uploaded Image & generated Link 

                <div className=" w-32 h-32 shadow-xl py-4 mx-auto object-fill rounded-lg">
  <figure><img src="https://img.freepik.com/free-photo/portrait-pretty-woman-sunglasses-hat-blue-colorful-wall_231208-545.jpg?size=626&ext=jpg&uid=R96377878&ga=GA1.1.309264521.1679383314&semt=sph" alt="image" /></figure>
  <div className=' py-2 flex justify-center'>
  <input type="search" id="default-search" class="block px-10 py-2 rounded-full p-4 ps-10 text-sm text-gray-900 border b"/>
                </div>
</div>


            </div>

        </div>
      
    </div>
  )
}

export default DashForm
