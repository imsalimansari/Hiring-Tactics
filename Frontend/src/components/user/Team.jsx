import React from 'react';

const Team = () => {
  return (
    <div className='max-w-7xl mx-auto my-20'>
      <div className='h-[500px] rounded-s-md bg-white'>
        <h1 className='text-4xl font-bold lg:p-16'>
          <span className='text-[#6A38C2]'>Our </span> Team
        </h1>
        <br />
        <div className="flex flex-wrap justify-center gap-8">
          {/* Circle Item 1 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-[210px] h-[210px] rounded-full overflow-hidden flex items-center justify-center hover:rounded-md">
              <img src="/img1.jpg" alt="Team Member 1" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Salim Ansari</h2>
            <p className="text-gray-600 text-center">
              FULLSTACK DEVELOPER
            </p>
          </div>

          {/* Circle Item 2 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-[210px] h-[210px] rounded-full overflow-hidden flex items-center justify-center hover:rounded-md">
              <img src="/img2.jpg" alt="Team Member 2" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Kajal</h2>
            <p className="text-gray-600 text-center">
              FRONTEND DEVELOPER
            </p>
          </div>

          {/* Circle Item 3 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-[210px] h-[210px] rounded-full overflow-hidden flex items-center justify-center hover:rounded-md">
              <img src="/img3.jpg" alt="Team Member 3" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Riya Singh</h2>
            <p className="text-gray-600 text-center">
            FRONTEND DEVELOPER
            </p>
          </div>

          {/* Circle Item 4 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-[210px] h-[210px] rounded-full overflow-hidden flex items-center justify-center hover:rounded-md">
              <img src="/img4.jpeg" alt="Team Member 4" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Kanchan</h2>
            <p className="text-gray-600 text-center">
            WEB DESIGNER
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
