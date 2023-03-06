import React, { useContext } from "react";
import { ThemeContext } from "../App";

function Footer({ scrollTo }) {
  const { theme } = useContext(ThemeContext);
  return (
    <footer className="h-48 mt-3 w-3/5 mx-auto flex justify-between items-center">
      <button
        type="button"
        style={{ backgroundColor: theme }}
        onClick={scrollTo}
        className="flex items-center justify-center  w-24 max-w-32 drop-shadow-md py-3 text-white rounded-md hover:opacity-90 shadow-md hover:scale-95 transition-all duraction-100"
      >
        <span className="mr-1">Top</span>
        <span>
          <svg
            width="18"
            height="18"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 19V5"></path>
            <path d="m5 12 7-7 7 7"></path>
          </svg>
        </span>
      </button>
      <a
        href="https://drive.google.com/file/d/1EXX3rBrwq_bgnOQa60jjepK_jakqCGFZ/view?usp=sharing"
        download
      >
        <button
          type="button"
          style={{ backgroundColor: theme }}
          onClick={scrollTo}
          className="flex items-center justify-center px-4 max-w-32 drop-shadow-md py-3 text-white rounded-md hover:opacity-90 shadow-md hover:scale-95 transition-all duraction-100"
        >
          <span className="mr-1 text-sm">My Resume</span>
          <span>
          <svg width="18" height="18" fill="#ffffff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2Zm-1-4-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5Z"></path>
         </svg>
          </span>
        </button>
      </a>
    </footer>
  );
}

export default Footer;
