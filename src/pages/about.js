import Head from "next/head";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateMenu } from "@/redux/ducks/menu";

function About() {
  const dispatch = useDispatch();
  const pageCheck = useRef(false);
  useEffect(() => {
    dispatch(
      updateMenu([
        { path: "/", title: "HOME", status: false },
        { path: "/portfolio", title: "PORTFOLIO", status: false },
        { path: "/our_services", title: "OUR SERVICES", status: false },
        { path: "/about", title: "ABOUT US", status: true },
        { path: "/contact_us", title: "CONTACT US", status: false },
      ])
    );
    if (pageCheck.current) {
    }
    return () => {
      pageCheck.current = true;
    };
  }, [dispatch]);
  return (
    <>
      <Head>
        <title>Teckiee | About Us</title>
      </Head>
      <div className="pt-14">
        <h1 className="text-center">
          From passion to Purpose: Turning Passion into a Leading Tech Service
        </h1>
        <p>
          Michael and Eddie, the managing partners of our company, bonded over
          their shared passion for technology during a chance encounter at a
          local bookstore. After discussing their ideas, they realized they had
          the potential to create something great together. With a focus on web
          development, networking, and marketing and design, they are dedicated
          to providing exceptional services to their clients.
        </p>
      </div>
    </>
  );
}
export default About;
