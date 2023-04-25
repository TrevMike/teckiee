import Image from "next/image";
import { useState } from "react";

function EmployeeCards() {
  const [toggle, setToggle] = useState(0);
  const employeeInfo = [
    {
      name: "Michael Trevino",
      title: "Managing Partner",
      info: [
        { contactType: "PH#", contact: "(956) 123 - 4567" },
        { contactType: "WEBSITE", contact: "www.teckiee.com" },
        { contactType: "DISCORD", contact: "mikeStillFabulous" },
        { contactType: "EMAIL ADDRESS", contact: "m.trevino@teckiee.com" },
      ],

      skills: ["Javascript", "CSS", "HTML", "Leadership"],
      aboutMe: "I have a strong passion in coding and helping others.",
      socialLinks: [
        { linkTitle: "Facebook", imgURL: "#." },
        { linkTitle: "TikTok", imgURL: "#." },
      ],
    },
  ];
  return (
    <div>
      {employeeInfo.map((item, index) => {
        return (
          <div key={index}>
            <div className="flex flex-col justify-center items-center">
              <h3>{item.name}</h3>
              <h4>{item.title}</h4>
            </div>

            {toggle === 0 &&
              item.info.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center flex-col"
                  >
                    <h3>{item.contactType}</h3>
                    <h4>{item.contact}</h4>
                    <button>Add to Contacts</button>
                  </div>
                );
              })}
            {toggle === 1 && "it is one"}

            {toggle === 2 && (
              <div>
                <div className="flex justify-evenly w-full">
                  <div className="w-1/2">
                    <h3>SKILLS</h3>
                    <ul>
                      {item.skills.map((item, index) => {
                        return <li key={index}>{item}</li>;
                      })}
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <h3>ABOUT ME</h3>
                    <p>{item.aboutMe}</p>
                  </div>
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="border border-l-fuchsia-400"
                >
                  project1
                </textarea>
              </div>
            )}
          </div>
        );
      })}
      <nav className="flex justify-evenly w-full">
        <div onClick={() => setToggle(0)} className="relative w-1/3 h-12">
          <Image src="/seo.svg" alt="testing" fill priority={true} />
        </div>
        <div onClick={() => setToggle(1)} className="relative w-1/3">
          <Image src="/seo.svg" alt="testing" fill priority={true} />
        </div>
        <div onClick={() => setToggle(2)} className="relative w-1/3">
          <Image src="/seo.svg" alt="testing" fill priority={true} />
        </div>
      </nav>
    </div>
  );
}

export default EmployeeCards;
