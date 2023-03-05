import React ,{useEffect, useRef} from "react";



function Navbar() { 
  const navRef = useRef();

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
    <header className="h-24 sticky top-0 flex justify-center items-center z-50 transition ease-linear duration-300" ref={navRef}  id="header">
      <nav className="w-11/12 md:w-2/4 mx-auto flex items-center justify-between">
        <div className="navbar-logo">
          <h1 className="text-xl font-semibold text-white relative logo">
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
      </nav>
    </header>
  );
}

export default Navbar;
