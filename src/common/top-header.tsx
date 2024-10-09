import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa6';
import { FiFacebook, FiLinkedin, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export const TopHeader: React.FC = () => {
  return (
    <header className=' py-4 px-4 xl:px-24 bg-[#F4F4F4] '>
      <div className="flex flex-row justify-between items-center mt-2">

        

        
        {/* Contact */}
        <div className="flex flex-row gap-2 justify-center items-center">
          {/* mail */}

          <div className="md:flex flex-row justify-center items-center gap-1 hidden">
  
            <div className="w-[30px] h-[30px] text-sm bg-[#D0A038] rounded-full  flex justify-center items-center">
              <CiMail 

                className="w-[20px] h-[20px] duration-500 transition-transform hover:-translate-y-1"
                color="white"
              />
            </div>

            <div>
            <p className="font-poppins text-sm font-semibold ">
              {'info@gmail.com'}
            </p>
          </div>

          </div>
         



          {/* Phone No */}
          <div className=" flex flex-row justify-center items-center gap-1">
            <div className="w-[30px] h-[30px] text-sm bg-[#D0A038] rounded-full  flex justify-center items-center">
              <FiPhone
                className="w-[20px] h-[20px] duration-500 transition-transform hover:-translate-y-1"
                color="white"
              />
            </div>

            <div>
            <p className="font-poppins text-sm font-semibold ">
              {'+91 7209563603'}
            </p>
          </div>
          </div>
          

         


          
        </div>



        {/* Social media icons */}
        <div className="flex flex-row gap-2 ">
          <Link
            to="https://www.facebook.com/profile.php?id=61560468841566"
            rel="noopener noreferrer"
            target="_blank"
            className="bg-[#D0A038]  w-[30px] h-[30px] rounded-full flex justify-center items-center"
          >
            <FiFacebook
              className="w-[20px] h-[20px] duration-500 transition-transform hover:-translate-y-1   "
              color="white"
            />
          </Link>
          <Link 
            to="https://twitter.com/adhipatech"
            rel="noopener noreferrer"
            target="_blank"
            className="bg-[#D0A038] w-[30px] h-[30px] rounded-full flex justify-center items-center"
          >
            <BsTwitterX
              className="w-[15px] h-[15px] duration-500 transition-transform hover:-translate-y-1"
              color="white"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/company/adhipa-tech/"
            rel="noopener noreferrer"
            target="_blank"
            className="bg-[#D0A038] w-[30px] h-[30px] rounded-full flex justify-center items-center"
          >
            <FiLinkedin
              className="w-[20px] h-[20px]  duration-500 transition-transform hover:-translate-y-1"
              color="white"
            />
          </Link>
          <Link
            to="https://www.instagram.com/adhipatechnologies/"
            rel="noopener noreferrer"
            target="_blank"
            className="bg-[#D0A038] text-white w-[30px] h-[30px]  flex  rounded-full justify-center items-center"
          >
            <FaInstagram
              className="w-[20px] h-[20px]  duration-500 transition-transform hover:-translate-y-1 text-white"
              color="white"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};
