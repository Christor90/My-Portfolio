import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="mt-12 w-max-[800px] border-t border-gray-500 text-center">
      <p className="my-5 text-gray-500">Stomz Qrts Kajakuv., 3307 Kyive</p>
      <div className="inline-flex text-gray-500 gap-4 text-3xl">
        <AiFillLinkedin />
        <AiFillGithub />
        <AiFillInstagram />
      </div>
    </div>
  );
};

export default Footer;
