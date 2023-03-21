import React from "react";
import coffeeCupLogo from "../assets/coffee-cup.png";
import waveLogo from '../assets/wave.png';
import Input from "./Input";

function ContactForm() {
  return (
    <div className="w-full md:w-3/5 mx-auto mt-[3rem] h-auto bg-zinc-900 rounded-lg py-4"
     style={{ background: `url(${waveLogo})`}}
    >
      <h1 className="text-xl font-light  text-center text-white  flex justify-center gap-2 items-center">
        Let's have a coffee break
        <img src={coffeeCupLogo} alt="coffee_cut" />
      </h1>

      <form className="w-9/12  p-3 text-xs mx-auto mt-[2rem]">
        <div className="grow">
          <Input type="email" name="email" placeholder="Email Address" />
        </div>

        <div className="grow p-[1px] bg-gradient-to-r from-[#08203e] to-[#557c93] rounded-md h-32 mt-3">
          <textarea
            name="message"
            placeholder="Type your messsage here...."
            className=" h-full w-full border-0 outline-0 pl-2 pt-2 bg-black rounded-md text-white"
            style={{ resize: "none" }}
          />
        </div>

        <div className="w-full flex justify-start" >
          <button
            type="button"
            className="mt-3 w-full bg-gradient-to-r from-[#858e96] to-[#60696b] p-3 text-white font-medium rounded-md hover:opacity-80 shadow-md transition-all duration-100 inline-flex items-center justify-center gap-2"
          >
            SEND
            <svg
              width="16"
              height="16"
              fill="#e6e6e6"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m3.51 6.03 7.51 3.22-7.52-1 .01-2.22Zm7.5 8.72L3.5 17.97v-2.22l7.51-1ZM1.51 3l-.01 7 15 2-15 2 .01 7 20.99-9L1.51 3Z"></path>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
