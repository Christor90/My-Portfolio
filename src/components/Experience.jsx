import React from 'react';

const Experience = () => {
  return (
    <div className="py-10 m-5 bg-[#232325]" id="experience">
      <h2 className="mb-8 text-3xl text-white text-center">
        My <span>Experience</span>
      </h2>

      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto ">
        <p>Slack Techies</p>
        <p className="text-gray-400">(2020 - Present)</p>
        <p className="text-gray-500">
          Description of your experience in theis Company
        </p>
      </div>

      <div className="h-[50px] w-[2px] bg-slate-400 my-1 mx-auto"></div>

      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <div className="grid place-items-end">
          <p>Almiron Tech</p>
          <p className="text-gray-400">(2020 - 2021)</p>
          <p className="text-gray-500">
            Description of your experience in theis Company
          </p>
        </div>
      </div>

      <div className="h-[50px] w-[2px] bg-slate-400 my-1 mx-auto"></div>

      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <p>Ese-Tech</p>
        <p className="text-gray-400">(2020 - 2022)</p>
        <p className="text-gray-500">
          Description of your experience in theis Company
        </p>
      </div>

      <div className="h-[50px] w-[2px] bg-slate-400 my-1 mx-auto"></div>

      <div className="mb-[20px] text-white relative bg-gray-700/20 p-4 rounded-3xl max-w-[600px] mx-auto">
        <div className="grid place-items-end">
          <p>Kaapo Global Services</p>
          <p className="text-gray-400">(2023 - 2024)</p>
          <p className="text-gray-500">
            Description of your experience in theis Company
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
