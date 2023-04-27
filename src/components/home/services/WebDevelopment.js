import Image from "next/image";

function WebDevelopment() {
  const list = [
    "Tailored Services",
    "Skilled Team",
    "High Standards",
    "Competitive Pricing",
    "Excellent Service",
    "Growth Partner",
  ];
  return (
    <div className="flex flex-col items-center pb-24">
      <section className="flex justify-evenly w-11/12">
        <div className="w-2/5 px-6">
          <p className="text-slate-400 py-2 font-montserrat font-medium">
            OUR SERVICES
          </p>
          <h2 className="font-poppins font-bold text-4xl">
            Professional Service <br />
            at Affordable Price
          </h2>
          <p className="text-slate-400 py-2 font-nunito font-light">
            Our team is committed to high-quality digital solutions at a
            competitive price. Whether you&apos;re looking to revamp your
            website, improve your online presence, or build a strong brand,
            we&apos;re here to provide you with the professional services you
            need to succeed online.
          </p>
          <p className="text-slate-400 py-2 font-nunito font-light">
            With personalized digital solutions tailored to your unique needs,
            we work closely with you to understand your goals, challenges, and
            vision, ensuring top-notch service and support every step of the
            way.
          </p>
          <ol className="flex justify-between flex-wrap py-6 w-full">
            {list.map((item, index) => {
              return (
                <li
                  className="w-1/2 py-2 text-sm flex items-center"
                  key={index}
                >
                  <span className="relative h-4 w-4">
                    <Image src="/Shape.svg" alt="testing" fill />
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
            <div className="w-1/2 bg-gradient-to-tr from-indigo-600 to-purple-500 ... text-slate-100 p-6 rounded-t-lg rounded-bl-lg">
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
                Create a professional and user-friendly website.
              </p>
            </div>
            <div className=" p-6 w-1/2">
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
                Set up an easy-to-manage online store.
              </p>
            </div>
          </div>
          {/* bottom side */}
          <div className="flex justify-evenly">
            <div className=" p-6 w-1/2">
              <div className="relative h-16 w-16">
                <Image src="/seo.svg" alt="web design logo" fill className="" />
              </div>
              <h4 className="py-2 font-poppins font-bold text-2xl">
                SEO and Analytics
              </h4>
              <p className="font-nunito font-normal">
                Improve online visibility and make data-driven decisions.
              </p>
            </div>
            <div className="bg-gradient-to-tr from-indigo-600 to-purple-500 ... text-slate-100  p-6 rounded-r-lg rounded-bl-lg w-1/2">
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
                Tailored to meet specific business needs for efficiency and cost
                reduction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopment;
