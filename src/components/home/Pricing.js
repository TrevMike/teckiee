import { useState } from "react";
import DesignAndMarketing from "./services/DesignAndMarketing";
import Networking from "./services/Networking";
import WebDevelopment from "./services/WebDevelopment";

function Pricing() {
  const [toggle, setToggle] = useState({
    web: true,
    networking: false,
    design: false,
  });
  function toggleHandler(btn) {
    if (btn === "web") {
      setToggle({
        web: true,
        networking: false,
        design: false,
      });
    } else if (btn === "networking") {
      setToggle({
        web: false,
        networking: true,
        design: false,
      });
    } else if (btn === "design") {
      setToggle({
        web: false,
        networking: false,
        design: true,
      });
    } else {
      alert("There is an error with toggling");
    }
  }

  return (
    <div className="bg-zinc-50">
      <h2 className="bg-gradient-to-r from-violet-700 to-violet-400 ... text-slate-100 text-center p-12 mb-12 font-inter font-extrabold text-5xl">
        LET&apos;S BUILD YOUR TOMORROW, TODAY!
      </h2>
      <div className="flex justify-evenly pb-6">
        <button
          className={
            toggle.web
              ? "text-violet-500 font-poppins font-bold text-3xl"
              : "text-slate-400 font-poppins font-bold text-3xl"
          }
          onClick={() => toggleHandler("web")}
        >
          Web Development
        </button>
        <button
          className={
            toggle.networking
              ? "text-violet-500 font-poppins font-bold text-3xl"
              : "text-slate-400 font-poppins font-bold text-3xl"
          }
          onClick={() => toggleHandler("networking")}
        >
          Networking
        </button>
        <button
          className={
            toggle.design
              ? "text-violet-500 font-poppins font-bold text-3xl"
              : "text-slate-400 font-poppins font-bold text-3xl"
          }
          onClick={() => toggleHandler("design")}
        >
          Design & Marketing
        </button>
      </div>
      <div className="pt-12">
        {toggle.web ? (
          <WebDevelopment />
        ) : toggle.networking ? (
          <Networking />
        ) : toggle.design ? (
          <DesignAndMarketing />
        ) : (
          "Error"
        )}
      </div>
    </div>
  );
}
export default Pricing;
