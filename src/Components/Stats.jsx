import React from 'react'

function Stats() {
  return (
    <div className=' bg-pink-100 rounded-lg'>
   
    <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">You’ll be in good company</h2>
      <div class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white py-4">
          <div class="flex flex-col items-center justify-center">
              <div class="mb-2 text-3xl md:text-4xl font-extrabold">73M+</div>
              <div class="font-bold text-gray-500 dark:text-gray-400">Mobile App Downloads</div>
           
          </div>
          <div class="flex flex-col items-center justify-center">
              <div class="mb-2 text-3xl md:text-4xl font-extrabold">600k+</div>
              <div class="font-bold text-gray-500 dark:text-gray-400">Teams globally</div>
          
          </div>

          <div class="flex flex-col items-center justify-center">
              <div class="mb-2 text-3xl md:text-4xl font-extrabold">2M+</div>
              <div class="font-bold text-gray-500 dark:text-gray-400">Connections and counting</div>
            
          </div>
          
      </div>
  </div>
    </div>

      

  )
}

export default Stats
