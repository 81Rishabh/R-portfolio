import React from 'react'
import Heading from './Heading';
import htmlsvg from '../assets/html.svg';
import csssvg from '../assets/css3.svg';
import jssvg from '../assets/javascript.svg';
import bootstrapsvg from '../assets/bootstrap.svg';
import sasssvg from '../assets/sass.svg';
import reactsvg from '../assets/react.svg';
import reduxsvg from '../assets/redux.svg';
import nodesvg from '../assets/node-js.svg';
import mongodbsvg from '../assets/mongodb.svg';
import gitsvg from '../assets/git.svg';
import ImageWrapper from './ImageWrapper';

function Technology() {
  const svgImage = [
     {
        svg : htmlsvg
     },
     {
        svg : csssvg
     },
     {
        svg : jssvg
     },
     {
        svg : bootstrapsvg
     },
     {
        svg : sasssvg
     },
     {
        svg : reactsvg
     },
     {
        svg : reduxsvg
     },
     {
        svg : nodesvg
     },
     {
        svg : mongodbsvg
     },
     {
        svg : gitsvg
     },
  ]
  return (
    <div className="w-11/12 h-auto mx-auto my-6 rounded bg-gray-50 shadow-sm p-5 md:h-96 dark:bg-slate-900 dark:border dark:border-slate-800 dark:backdrop-blur-md" id="technology">
      <Heading text="Technology I Used"/>
      <div className="flex mx-auto w-10/12 justify-between items-center h-full flex-wrap p-5 md:m-0 md:mx-auto">
           {
            svgImage.map((img , idx) => {
                return <ImageWrapper image={img.svg} key={idx}/>
            })
           }   
      </div>
    </div>
  )
}

export default Technology