import Image from "next/image";

function WebDevelopment() {
  const pricing = [
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
  ];
  const list = [
    "Experienced Professionals",
    "Super Creative Team",
    "World-Class Agency",
    "Award Winning Agency",
    "Client Focused Approach",
    "Money Back Guarantee",
  ];
  return (
    <div className="flex flex-col items-center">
      <section className="flex justify-evenly w-11/12">
        <div className="w-2/5 px-6">
          <p className="text-slate-400 py-2 font-montserrat font-medium">
            OUR SERVICES
          </p>
          <h2 className="font-poppins font-bold text-4xl">
            Professionsal Service <br />
            at Affordable Price
          </h2>
          <p className="text-slate-400 py-2 font-nunito font-light">
            Far far away, behind the word montains, far from the countries
            vokalia and consonantai, there live the blind texts. Separeted they
            live in bookmarksgrove right at the coast of the semantics, a large
            language ocean.
          </p>
          <p className="text-slate-400 py-2 font-nunito font-light">
            A small river named duden flows by their place and supplies it with
            the nexessary regelialia. it is a paradisemtaic country, in which
            roasted.
          </p>
          <ol className="flex justify-between flex-wrap py-6 w-full">
            {list.map((item, index) => {
              return (
                <li
                  className="w-1/2 py-2 text-sm flex items-center"
                  key={index}
                >
                  <span className="relative h-4 w-4">
                    <Image src="/shape.svg" alt="testing" fill />
                  </span>

                  <span className="pl-1 font-nunito font-light">{item}</span>
                </li>
              );
            })}
          </ol>
          <button className="bg-gradient-to-r from-violet-700 to-violet-400 ... text-slate-100 w-3/4 py-2 rounded-3xl font-poppins font-bold text-2xl">
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
              <div className="relative h-16 w-16">
                <Image
                  src="/test.svg"
                  alt="web design logo"
                  fill
                  className=""
                />
              </div>
              <h4 className="py-2 font-poppins font-bold text-2xl">
                Web Design
              </h4>
              <p className="font-nunito font-normal">
                A small river named duden flows by their place and supplies it
                with the necessary regelialia
              </p>
            </div>
            <div className=" p-6">
              <div className="relative h-16 w-16">
                <Image
                  src="/eCommerce.svg"
                  alt="web design logo"
                  fill
                  className=""
                />
              </div>
              <h4 className="py-2 font-poppins font-bold text-2xl">
                E-Commerce
              </h4>
              <p className="font-nunito font-normal">
                A small river named duden flows by their place and supplies it
                with the necessary regelialia
              </p>
            </div>
          </div>
          {/* bottom side */}
          <div className="flex justify-evenly">
            <div className=" p-6">
              <div className="relative h-16 w-16">
                <Image src="/seo.svg" alt="web design logo" fill className="" />
              </div>
              <h4 className="py-2 font-poppins font-bold text-2xl">
                SEO and Analytics
              </h4>
              <p className="font-nunito font-normal">
                A small river named duden flows by their place and supplies it
                with the necessary regelialia
              </p>
            </div>
            <div className="bg-gradient-to-tr from-indigo-600 to-purple-500 ... text-slate-100  p-6 rounded-r-lg rounded-bl-lg">
              <div className="relative h-16 w-16">
                <Image
                  src="/custom.svg"
                  alt="web design logo"
                  fill
                  className=""
                />
              </div>
              <h4 className="py-2 font-poppins font-bold text-2xl">
                Custom Solutions
              </h4>
              <p className="font-nunito font-normal">
                A small river named duden flows by their place and supplies it
                with the necessary regelialia
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-violet-800 mt-10 p-12 w-full">
        <h2 className="text-center text-slate-100 font-inter font-extrabold text-5xl">
          WE PROVIDE DIGITAL SOLUTIONS
        </h2>
        <div className="flex justify-evenly pt-8">
          {pricing.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-zinc-50 shadow-lg shadow-slate-100/70 rounded-xl p-14 w-1/4"
              >
                <h4 className="font-poppins font-bold text-indigo-900 text-2xl">
                  {item.title}
                </h4>
                <div className="w-full">
                  <div className="w-12 h-0.5 my-4 bg-purple-500"></div>
                </div>
                <h2 className="font-poppins font-bold text-5xl text-indigo-900 pt-1">
                  {item.price}
                </h2>
                <div className="font-nunito font-normal text-sm text-slate-500 py-2">
                  Per month
                </div>
                <ol className="py-6">
                  {item.listOfItems.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="py-1 font-nunito font-nomral text-slate-500 flex justify-start"
                      >
                        <div className="relative w-4 h-auto">
                          <Image src="/check.svg" alt="check mark" fill />
                        </div>
                        <span className="pl-2">{item}</span>
                      </li>
                    );
                  })}
                </ol>
                <div className="w-full flex justify-center">
                  <button className="bg-gradient-to-tr from-indigo-600 to-purple-500 ... py-2 px-6 round rounded-3xl text-slate-100 font-poppins font-medium">
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
