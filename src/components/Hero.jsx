import React from 'react';

const Hero = () => {
  return (
    <div className={`h-screen bg-center bg-cover flex items-center justify-center text-white hero-container`}>
      <div className="z-10 text-center drop-shadow-[1px_3.2px_3.2px_rgba(1,1,1,1)] bg-black bg-opacity-10">
        <h1 className="text-6xl font-bold mb-4 add-stroke">Welcome to Our School</h1>
        <p className="text-2xl">Empowering the future generation through education.</p>
      </div>
    </div>
  );
};

export default Hero;