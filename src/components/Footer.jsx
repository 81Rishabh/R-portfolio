
import React ,{useContext} from "react";
import { ThemeContext } from "../App";


function Footer({ scrollTo }) {
    const {theme} = useContext(ThemeContext);
  return (
    <footer className="h-48 mt-3 w-3/5 mx-auto flex justify-center items-center">
      <button
        type="button"
        style={{backgroundColor: theme}}
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
    </footer>
  );
}

export default Footer;
