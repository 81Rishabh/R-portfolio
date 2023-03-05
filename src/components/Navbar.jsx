import React ,{useEffect, useRef,useContext} from "react";
import { ThemeContext } from "../App";


function Navbar(props) { 
  const navRef = useRef();
  const {theme} = useContext(ThemeContext);

  useEffect(() => {
    function handleScroll() {
       const scrollPositon = window.pageYOffset;
       if(scrollPositon > 15) {
          navRef.current.classList.add('active');
        } else {
           navRef.current.classList.remove('active');
       }
    }
    document.addEventListener('scroll' , handleScroll);
    return () => document.removeEventListener('scroll' , handleScroll);
  },[]);
  return (
    <header className="h-24 sticky top-0 flex justify-center items-center z-40 transition ease-linear duration-300" ref={navRef}  id="header">
      <nav className="w-11/12 md:w-2/4 mx-auto flex items-center justify-between">
        <div className="navbar-logo">
          <h1 className={`text-xl font-semibold text-white relative logo before:bg-[${theme}]`}>
            FrontendDevs
          </h1>
        </div>

        <div className="flex w-36 list-none  justify-evenly items-center">
          <li>
           <a href="https://www.instagram.com/_frontend_devs/">
           <svg
           width="27"
              height="27"
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:stroke-indigo-600"
            >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <path d="M17.5 6.5h.01"></path>
            </svg>
            </a>
          </li>
          <li>
           <a href="https://github.com/81Rishabh">
           <svg
           width="27"
           height="27"
           fill="none"
           stroke="#ffffff"
           strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:stroke-indigo-600"
              >
              <path d="M16.25 22.5v-3.865a3.361 3.361 0 0 0-.94-2.607c3.14-.35 6.44-1.538 6.44-6.99a5.43 5.43 0 0 0-1.5-3.746 5.058 5.058 0 0 0-.09-3.765s-1.18-.35-3.91 1.478a13.397 13.397 0 0 0-7 0C6.52 1.177 5.34 1.527 5.34 1.527a5.058 5.058 0 0 0-.09 3.765 5.43 5.43 0 0 0-1.5 3.775c0 5.413 3.3 6.602 6.44 6.991a3.366 3.366 0 0 0-.94 2.577V22.5"></path>
              <path d="M9.25 19.503c-5 1.498-5-2.496-7-2.996"></path>
              </svg>
              </a>
          </li>
          <li>
           <a href="https://www.linkedin.com/in/rishabh-vishwakarma-6539a71ba/">
           <svg
           width="27"
              height="27"
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:stroke-indigo-600"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <path d="M2 9h4v12H2z"></path>
              <path d="M4 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"></path>
            </svg>
            </a>
          </li>
        </div>

       <div className="setting">
         <svg onClick={() => props.handleOpen()} width="28" height="28" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer hover:rotate-45 transition duration-200">
          <path d="M3.34 17.002a10.02 10.02 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347 9.99 9.99 0 0 1 2.501-4.337 3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672 9.99 9.99 0 0 1 1.525 2.01c.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.5 4.337 3 3 0 0 0-4.632 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672 10.02 10.02 0 0 1-1.525-2.01Zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.5.047 1 .048 1.5 0a4.993 4.993 0 0 1 2.25-2.77 4.993 4.993 0 0 1 3.525-.564c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12.002c0-1.26.47-2.437 1.273-3.334-.21-.455-.46-.89-.75-1.298A4.993 4.993 0 0 1 15 6.806a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001a4.993 4.993 0 0 1-2.25 2.77 4.993 4.993 0 0 1-3.526.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12.002a4.99 4.99 0 0 1-1.273 3.334c.21.455.46.89.75 1.298A4.993 4.993 0 0 1 9 17.198Zm3-2.196a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
         </svg>
       </div>
      </nav>
    </header>
  );
}

export default Navbar;
