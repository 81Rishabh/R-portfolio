import React from 'react'
import Heading from './Heading'
import userPng from '../assets/user.png';

function Contact() {
  return (
    <div className="w-11/12 h-auto mx-auto my-6 rounded bg-gray-50 shadow-sm p-5 md:h-96 dark:bg-slate-900" id="contact">
      <Heading text="Contact Me"/>
       <div class="w-full h-full md:w-5/12 mx-auto py-4 flex flex-col justify-center items-center">
          <div className="flex items-end">
              <div className="w-14 h-14 flex md:w-24 md:h-24">
                 <img src={userPng} alt="user-png" className="w-full"/>
              </div>
               <h1 className="text-[#380D63] text-1xl font-extrabold ml-5 md:text-4xl dark:text-slate-200">How to reach me ?</h1>
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-4 md:flex-row">
             <input className="p-3 mt-4 w-9/12 md:w-7/12 bg-white rounded-full  border-2 border-pink-100 outline-offset-4  focus:outline-4 focus:outline-offset-4 focus:outline-pink-400 " type="email" placeholder="Write Somthing here...." />
             <button className="bg-pink-400 w-4/12 md:w-2/12 ml-2 mt-4 p-3 flex justify-evenly rounded-full text-white hover:bg-pink-600 text-sm">SEND
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
             <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
             </svg>
             </button>
            </div>
       </div>
       
    </div>
  )
}

export default Contact