import React from 'react'

const Choose = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
            
            <div className='h-[500px] rounded-s-md bg-white'>
            <div className="flex flex-col lg:flex-row items-center bg-white p-8 lg:p-16 space-y-8 lg:space-y-0 lg:space-x-16">
      {/* Left Side */}
      <div className="flex-1">
      <h1 className='text-4xl font-bold'><span className='text-[#ff0000]'>Why</span><span className='text-[#6A38C2]'> Choose </span> Us</h1><br />
        <p className="mt-4 text-gray-600">
          Discover a world of opportunities with Hiring Tactics! We bring you
          closer to your dream job with a user-friendly platform, real-time job
          alerts, and personalized job recommendations. Trusted by top employers,
          we help you unlock your career potential with ease and confidence.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex-1 relative">
        <div className="w-full h-64 lg:h-96 overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-lg bg-gradient-to-br from-purple-500 to-indigo-500">
          <img
            src="/Job.jpg" // Replace with your image URL
            alt="Why Choose Us"
            className="w-full h-full object-cover opacity-100"
          />
        </div>
      </div>
    </div>
            </div>
        </div>
  )
}

export default Choose