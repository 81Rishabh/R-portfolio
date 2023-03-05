import React ,{useContext,useRef} from "react";
import { ThemeContext } from "../App";

function Sidebar(props) {
  const {changeTheme} = useContext(ThemeContext);
  const PalatesRef = useRef();


  const handleThemeChange = (e,theme) => {
      const self = e.target;
      const palates = PalatesRef.current.children;

      self.classList.add('enable');
      self.style.outlineColor = theme;

      Array.from(palates).forEach(palete => {
          if(palete !== self && palete.classList.contains('enable')) {
            palete.classList.remove('enable');
            self.style.outlineColor = 'none';
          }
      });
    
     changeTheme(theme);
  }
  
  return (
    <div className={`${!props.open ? 'translate-x-[25rem]' : 'translate-x-0'} w-[25rem] bg-zinc-700 h-full fixed overflow-hidden right-0 top-0 p-3 z-50  transition-all duraction-200"`}>
      <h1 className="text-xl text-white font-medium flex justify-between">
        <span onClick={() => props.handleOpen()} className="cursor-pointer">
            <svg width="28" height="28" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="m12 10.583 4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414L12 13.41l-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.633l4.95 4.95Z"></path>
         </svg>
        </span>
        <span>Settings</span>
      </h1>
      
      <div className="content mt-5">
        <h2 className="text-md text-zinc-300 font-medium">Color Palates</h2>
        <div className="colors mt-2 w-56 flex justify-start items-center gap-x-3 py-2" ref={PalatesRef}>
            <div className="w-6 h-6 rounded-full bg-indigo-600" onClick={(e) => handleThemeChange(e,'indigo')}></div>
            <div className="w-6 h-6 rounded-full bg-teal-600" onClick={(e) => handleThemeChange(e,'teal')}></div>
            <div className="w-6 h-6 rounded-full bg-cyan-600" onClick={(e) => handleThemeChange(e,'cyan')}></div>
            <div className="w-6 h-6 rounded-full bg-[#242329]" onClick={(e) => handleThemeChange(e,'gray')}></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar