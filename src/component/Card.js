import React from 'react'

function Card({item}) {
  
  return (
    <div className="card w-full h-auto bg-white shadow-md rounded-lg my-2 cursor:pointer md:w-96 md:h-auto dark:bg-slate-800">
      <div className="w-full h-3/6 bg-slate-200 rounded-t-lg shadow-sm">
         <img src={item.png} alt="project_img" className="w-full h-full object-cover rounded" />  
      </div>
      <div className="project-detail p-5">
        <h1 className="font-bold dark:text-slate-100">{item.title}</h1>
        <p className="text-gray-500 text-sm mt-2 dark:text-slate-300">{item.text}</p>
        <div className="mt-5 h-24 flex items-center flex-wrap flex-col md:flex-row w-full"> 
          <button type="button" className="transition ring-offset-1 ring-2 ring-green-500 rounded-full  text-green-600 px-3 hover:bg-green-700 hover:text-white mb-3 md:m-0"><span className="text-xs">Live preview</span></button>
          <button type="button" className="bg-black  rounded-full text-white  px-3 py-1 hover:opacity-90  md:ml-3"><span className="text-xs">Git Repository</span></button>
        </div>
      </div>
    </div>
  )
}

export default Card