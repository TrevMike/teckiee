import { useState } from "react";

function WebDevelopment() {
  const [pricing, setPricing] = useState([
    {
      title: "Portfolio",
      price: "$2000",
      listOfItems: [
        "Free Updates",
        "Custom Domain",
        "Outstanding Support",
        "1 to 3 Pages Included",
        "$150 - Each Extra Page",
      ],
      btnURL: "#.",
    },
    {
      title: "Startup",
      price: "$5000",
      listOfItems: [
        "Free Updates",
        "Custom Domain",
        "Outstanding Support",
        "1 to 3 Pages Included",
        "$150 - Each Extra Page",
      ],
      btnURL: "#.",
    },
    {
      title: "Business",
      price: "$8000",
      listOfItems: [
        "Free Updates",
        "Custom Domain",
        "Outstanding Support",
        "1 to 3 Pages Included",
        "$150 - Each Extra Page",
      ],
      btnURL: "#.",
    },
  ]);
  return (
    <div>
      <section className="flex justify-evenly">
        <div className="w-2/5 px-6">
          <p className="text-slate-400 py-2">OUR SERVICES</p>
          <h2>Professionsal Service at Affordable Price</h2>
          <p className="text-slate-400 py-2">
            Far far away, behind the word montains, far from the countries
            vokalia and consonantai, there live the blind texts. Separeted they
            live in bookmarksgrove right at the coast of the semantics, a large
            language ocean.
          </p>
          <p className="text-slate-400 py-2">
            A small river named duden flows by their place and supplies it with
            the nexessary regelialia. it is a paradisemtaic country, in which
            roasted.
          </p>
          <ol className="flex justify-between flex-wrap py-6 w-full">
            <li className="w-1/2 py-2 text-sm ">
              {/* icon here */}
              <span>Experienced Professionals</span>
            </li>
            <li className="w-1/2 py-2 text-sm">
              {/* icon here */}
              <span>Super Creative Team</span>
            </li>
            <li className="w-1/2 py-2 text-sm">
              {/* icon here */}
              <span>World-Class Agency</span>
            </li>
            <li className="w-1/2 py-2 text-sm">
              {/* icon here */}
              <span>Award Winning Agency</span>
            </li>
            <li className="w-1/2 py-2 text-sm">
              {/* icon here */}
              <span>Client Focused Approach</span>
            </li>

            <li className="w-1/2 py-2 text-sm">
              {/* icon here */}
              <span>Money Back Guarantee</span>
            </li>
          </ol>
          <button className="bg-gradient-to-r from-violet-700 to-violet-400 ... text-slate-100 w-3/4 py-2 rounded-3xl">
            Get a free Quote
          </button>
        </div>
        <div className="w-3/5 px-6">
          {/* top side */}
          <div className="flex justify-evenly ">
            <div
              className="bg-gradient-to-tr from-indigo-600 to-purple-500 ... text-slate-100 p-6 rounded-t-lg 
rounded-bl-lg"
            >
              {/* icon here */}
              <h4 className="py-2">Web Design</h4>
              <p>
                A small river named duden flows by their place and supplies it
                with the necessary regelialia
              </p>
            </div>
            <div className=" p-6">
              {/* icon here */}
              <h4 className="py-2">E-Commerce</h4>
              <p>
                A small river named duden flows by their place and supplies it
                with the necessary regelialia
              </p>
            </div>
          </div>
          {/* bottom side */}
          <div className="flex justify-evenly">
            <div className=" p-6">
              {/* icon here */}
              <h4 className="py-2">SEO and Analytics</h4>
              <p>
                A small river named duden flows by their place and supplies it
                with the necessary regelialia
              </p>
            </div>
            <div className="bg-gradient-to-tr from-indigo-600 to-purple-500 ... text-slate-100  p-6 rounded-r-lg rounded-bl-lg">
              {/* icon here */}
              <h4 className="py-2">Custom Solutions</h4>
              <p>
                A small river named duden flows by their place and supplies it
                with the necessary regelialia
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-violet-800 mt-10 p-12">
        <h2 className="text-center text-slate-100">
          WE PROVIDE DIGITAL SOLUTIONS
        </h2>
        <div className="flex justify-evenly pt-8">
          {pricing.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-zinc-50 shadow-lg shadow-slate-100/70 rounded p-4 w-1/4"
              >
                <h4>{item.title}</h4>
                <h2>{item.price}</h2>
                <div>Per month</div>
                <ol>
                  {item.listOfItems.map((item, index) => {
                    return (
                      <li key={index} className="py-1">
                        {/* icon here */}
                        {item}
                      </li>
                    );
                  })}
                </ol>
                <div className="w-full flex justify-center">
                  <button className="bg-gradient-to-tr from-indigo-600 to-purple-500 ... py-2 px-6 round rounded-3xl text-slate-100">
                    Getting Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default WebDevelopment;
