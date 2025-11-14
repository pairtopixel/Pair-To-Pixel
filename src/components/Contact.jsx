import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";

function Contact() {

  // Data for social media links to keep the JSX clean and scalable
  const socialLinks = [
    { icon: <FaFacebookF size={22} />, href: '#', bg: 'bg-[#1877F2]' },
    { icon: <FaInstagram size={22} />, href: '#', bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600' },
    { icon: <FaLinkedinIn size={22} />, href: '#', bg: 'bg-[#0A66C2]' },
    { icon: <FaYoutube size={22} />, href: '#', bg: 'bg-[#FF0000]' },
  ];

  return (
    <div className="  text-white min-h-screen font-sans">
      
      {/* Red Header Bar */}
      <div className=" py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="bg-gradient-to-br from-red-900/50 to-black p-2 rounded-xl">
            <form className="  p-6 sm:p-8 rounded-md space-y-5 text-white">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" 
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow" 
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows="6"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition-shadow resize-none"
                ></textarea>
              </div>
              
              {/* Note: This is a visual placeholder for reCAPTCHA. */}
              {/* <div className="bg-gray-100 p-2 border border-gray-300 rounded flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="recaptcha" className="h-6 w-6 border-gray-400 rounded text-blue-600 focus:ring-blue-500" />
                  <label htmlFor="recaptcha" className="text-gray-700 text-sm">I'm not a robot</label>
                </div>
                <div className="text-center text-gray-500">
                    <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" className="h-8 mx-auto" />
                    <p>Privacy - Terms</p>
                </div>
              </div> */}

              <button 
                type="submit" 
                className="w-full py-3 px-6 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition-colors duration-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>

          {/* Right Column: Contact Info */}
          <div className="space-y-6">
            <div className="bg-red-800 p-5 rounded-xl flex items-center gap-5">
              <div className="bg-blue-500 p-4 rounded-full">
                <FaPhoneAlt className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">Contact</h3>
                <p className="text-gray-200">+8801754593323</p>
              </div>
            </div>
            
            <div className="bg-red-800 p-5 rounded-xl flex items-center gap-5">
              <div className="bg-green-500 p-4 rounded-full">
                <FaWhatsapp className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="font-semibold text-xl">WhatsApp</h3>
                <p className="text-gray-200">+8801604176228</p>
              </div>
            </div>

            <div className="bg-red-800 p-5 rounded-xl flex items-center gap-5">
              <div className="bg-white p-3 rounded-full flex items-center justify-center">
                 {/* This is a simple representation of the Gmail logo */}
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 5.88V18.12C22 19.71 20.69 21 19 21H5C3.31 21 2 19.71 2 18.12V5.88C2 4.98 2.5 4.17 3.25 3.73L11.25 8.73C11.66 8.94 12.34 8.94 12.75 8.73L20.75 3.73C21.5 4.17 22 4.98 22 5.88Z" fill="#EA4335"/>
                    <path d="M3.25 3.73L12 8.5L20.75 3.73C20.41 3.29 19.94 3 19.4 3H4.6C4.06 3 3.59 3.29 3.25 3.73Z" fill="#4285F4"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-xl">Email</h3>
                <p className="text-gray-200">info@pairtopixel.com</p>
                <p className="text-gray-200">pairtopixel@gmail.com</p>
              </div>
            </div>
            
            <div className="bg-red-800 p-5 rounded-xl">
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.href} 
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110 ${link.bg}`}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;