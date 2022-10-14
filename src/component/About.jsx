import React from 'react'
import Heading from './Heading'
import HeroImage from '../assets/Hero.png'
function About() {
  return (
    <div className="w-11/12 h-auto mx-auto my-6 rounded  shadow-sm p-5 md:h-80" id="About">
      <Heading text="About Me"/>
      <div className="w-10/12 mx-auto mt-3 h-5/6  flex flex-col justify-between items-center md:p-10 md:flex-row">
        <div className="about-text">
          <p><span className="font-extrabold text-2xl text-[#380D63]">Web Developer</span> at <span>Align Exports</span></p>
          <p className="w-full mt-4 text-gray-500 text-sm md:text-md md:w-96">Through constant learning and creation , I product highly aesthetic website to highest standered i'm largly framwork agnostic but technologies , i love right now React , React native , styled component</p>
        </div>
        <div className="hero-image hidden lg:block w-96">
              <img src={HeroImage} alt="hero" className="w-full"/>
          </div>
      </div>
    </div>
  )
}

export default About;        