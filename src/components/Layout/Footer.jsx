import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaGitSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import footerApi from "../../Api/FooterApi.json"

const Footer = () => {

  const footerIcon = {
    FaGitSquare: <FaGitSquare />,
    FaLinkedin: <FaLinkedin />,
    MdEmail: <MdEmail />
  }

  return (

    <footer className="w-[100%] shadow-2xl mt-[70px]">
      <div className=" m-auto max-w-[1070px] mt-[70px] p-4 text-center">

        <div className="text-center">
          <h3>Dheeraj Prajapati</h3>
          <p className='text-[18px] font-[400]'>Frontend Developer</p>
        </div>

        <div className="flex place-self-center gap-[15px] mt-[15px]" >
          {
            footerApi.map((cur, index) => {
              const { icon, title, github } = cur;

              return (
                <div className="flex items-center gap-[10px] cursor-pointer hover:text-[#5a32d6] duration-300" key={index}>

                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[25px]"
                  >
                    {footerIcon[icon]}
                  </a>

                  <div className="para"> {title}</div>
                </div>
              )
            })
          }
        </div>

        <p className="relative top-[10px] text-[14px] font-[500]">
          <span className='absolute left-[37%] top-[6px]'><MdCopyright /></span> Dheeraj Prajapati. All rights reserved.
        </p>

      </div>
    </footer >
  );
};

export default Footer;
