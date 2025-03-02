import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-700  py-10 w-full pt-24 my-48 ">



      <div className="max-w-7xl mx-auto">
        <div className='grid grid-cols-1 gap-x-10 md:grid-cols-2 lg:grid-cols-4'>

          <div className="flex flex-col w-2/3">
            <h1 className="text-2xl my-6 font-bold">LOGO</h1>
            <p className="  text-start py-4 ">
              The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.
            </p>
          </div>

          <div className="flex flex-col w-2/3">
            <p className="text-xl my-6 mine-color">Services</p>
            <p className="py-4">
              Email Markiting
            </p>
            <p className="py-2">
              Compogination
            </p>
            <p className="py-2">
              Branding
            </p>
          </div>


          <div className="flex flex-col w-2/3">
            <p className="text-xl my-6 mine-color">Furniter</p>
            <p className="py-4">
              Beds
            </p>
            <p className="py-2">
              Chare
            </p>
            <p className="py-2">
              All
            </p>
          </div>

          <div className="flex flex-col items-center w-2/3">
            <p className="text-xl my-6 mine-color">Follwing Us</p>
            <div className="py-4 flex justify-center items-center space-x-4">
              <FaFacebookF className="text-2xl mx-3" />
              Facebook
            </div>
            <p className="py-2 flex items-center justify-center space-x-4">
              <FaTwitter className="text-2xl mx-3" />
              Twitter

            </p>
            <p className="py-2 flex justify-center items-center space-x-4">
              <FaInstagram className="text-2xl mx-3" />
              Instagram
            </p>
          </div>


        </div>





      </div>
      <div className="max-w-7xl mx-auto py-10 ">
        <div className="flex items-center justify-between  ">
          <div>
             <p className="">© 2021 All rights reserved</p>
          </div>
         
          <div className="flex space-x-4  ">

            <p>Term & Conditions</p>
            <p>Privacy Policy</p>

          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
