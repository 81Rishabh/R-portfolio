import React from 'react'

function ImageWrapper({image}) {
  return (
    <div className="img-wrapper animate-wiggle transition w-10 h-10 md:w-20 md:h-20 bg-white p-3 m-2 rounded-full shadow-sm hover:shadow-md ease-in-out  shadow-sm shadow-indigo-500/50" style={{cursor : 'pointer'}}>
      <img src={image} alt="tech" className="w-full " />
    </div>
  )
}

export default ImageWrapper;