import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="flex place-items-center justify-between m-12 w-max-[800px] border-t border-gray-500 text-center">
      <p className="my-5 text-gray-500">Stomz Qrts Kajakuv., 3307 Kyive</p>
      <div className="inline-flex text-gray-500 gap-4 text-3xl">
        <AiFillLinkedin />
        <AiFillGithub />
        <AiFillInstagram />
      </div>

      <p className="text-gray-500">
        @Copy {new Date().getFullYear()} Right Portfolio Page
      </p>
    </div>
  );
};

export default Footer;
