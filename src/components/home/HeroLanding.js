import React, { useRef, useEffect } from "react";
// import "../../assets/Abstract_Background_10.mp4";
import picture from "../../assets/Screenshots.png";
import Image from "next/image";

import Typed from "typed.js";

function HeroLanding() {
  const typedRef = useRef(null);
  const prompt = "hello world";
  const data = {
    promptData: [prompt],
  };
  //   console.log(data);
  useEffect(() => {
    const options = {
      strings: [
        "Let Us Handle IT!",
        "Let Us Handle Marketing!",
        "Let Us Handle Social Media!",
        "Let Us Handle Graphic Design!",
        "Let Us Handle Networking!",
        "Let Us Handle Custom Solutions!",
      ],
      typeSpeed: 75,
      backSpeed: 75,
      loop: true,
      cursorChar: "|",
    };

    typedRef.current = new Typed("#typed", options);

    return () => {
      typedRef.current.destroy();
    };
  }, []);

  return (
    <header className="pt-14">
      <div className="relative">
        <video className="w-full h-auto" type="video/mp4" autoPlay muted loop>
          <source src="/Abstract_Background_10.mp4" />
        </video>
        <div className="text-slate-100 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center ">
          <h1 className="">Teckiee</h1>
          <div>
            <span id="typed" style={{ whiteSpace: "pre" }} />
          </div>
        </div>
      </div>
      <div className="bg-zinc-50">
        <h2 className="flex justify-center text-violet-900 py-8">
          WE PROVIDE DIGITAL SOLUTIONS
        </h2>
        <div className="flex justify-evenly pb-12">
          <div className="w-1/3 p-4">
            {/* icon here */}
            <h4>Web & App Development</h4>
            <p>
              Save time and energy with our in-house professionals so you can
              focus on what matters on your business
            </p>
          </div>
          <div className="w-1/3 p-4">
            {/* icon here */}
            <h4>Networking Solutions</h4>
            <p>
              Save time and energy with our in-house professionals so you can
              focus on what matters on your business
            </p>
          </div>
          <div className="w-1/3 p-4">
            {/* icon here */}
            <h4>Design & Marketing</h4>
            <p>
              Save time and energy with our in-house professionals so you can
              focus on what matters on your business
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroLanding;
