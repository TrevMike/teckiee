import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Footer() {
  const [input, setInput] = useState("");
  const links = [
    {
      title: "Company",
      subLinks: [
        { title: "FAQs", link: "/" },
        { title: "Blog", link: "/" },
        { title: "Jobs", link: "/" },
        { title: "Partners", link: "/" },
        { title: "About Us", link: "/" },
      ],
    },
    {
      title: "Solutions",
      subLinks: [
        { title: "Digital", link: "/" },
        { title: "Network", link: "/" },
        { title: "Print", link: "/" },
      ],
    },
    {
      title: "Support",
      subLinks: [
        { title: "Services", link: "/" },
        { title: "Projects", link: "/" },
        { title: "Contact Us", link: "/" },
      ],
    },
  ];
  return (
    <footer className="hidden lg:block bg-indigo-950 border-t border-indigo-800">
      <div className="flex px-6 py-14 w-full justify-between">
        <div className="relative w-2/5 h-auto">
          <Image src="/robotv2.svg" alt="company robtot mascot" fill />
        </div>
        <div className="flex w-1/5">
          {links.map((item, index) => {
            return (
              <div className="flex flex-col w-1/3" key={index}>
                <h3 className="font-inter font-medium text-slate-100 pb-4">
                  {item.title}
                </h3>
                <ul className="text-slate-500">
                  {item.subLinks.map((item, index) => {
                    return (
                      <li className="font-inter font-medium pb-2" key={index}>
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-t border-indigo-800 py-12 px-6 flex justify-between items-center">
        <div className="text-slate-100">
          <h3 className="font-inter font-medium">Subcribe to our newsletter</h3>
          <p className="font-inter pt-3">
            The latest news, articles, resources and promotions, sent to your
            inbox monthly.
          </p>
        </div>
        <div className="text-slate-100 w-1/2 text-right relative">
          <input
            placeholder="Enter email"
            value={input}
            onChange={e => setInput(e.target.value)}
            className="bg-indigo-950 border rounded-md py-3 px-5 w-3/5 font-inter font-light"
          />
          <button className="absolute text-center right-2 top-2 w-1/6 py-1 px-2 font-inter font-bold rounded-md bg-gradient-to-r from-violet-700 to-violet-400 ...">
            Subscribe {">"}
          </button>
        </div>
      </div>

      <div className="text-slate-100 bg-indigo-950 py-6 text-center font-inter font-medium border-t border-indigo-800">
        All rights reserved Teckiee 2023
      </div>
    </footer>
  );
}
export default Footer;
