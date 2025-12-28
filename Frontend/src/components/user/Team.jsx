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
          </div>

          {/* Circle Item 2 */}
          <div className="flex flex-col items-center space-y-4">
            <div className="w-[210px] h-[210px] rounded-full overflow-hidden flex items-center justify-center hover:rounded-md">
              <img src="//img3.jpg" alt="Team Member 2" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-bold text-gray-800">Riya Singh</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
