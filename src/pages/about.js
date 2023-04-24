import Head from "next/head";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateMenu } from "@/redux/ducks/menu";

function About() {
  const dispatch = useDispatch();
  const pageCheck = useRef(false);
  useEffect(() => {
    if (pageCheck.current) {
      dispatch(
        updateMenu([
          { path: "/", title: "HOME", status: false },
          { path: "/portfolio", title: "PORTFOLIO", status: false },
          { path: "/our_services", title: "OUR SERVICES", status: false },
          { path: "/about", title: "ABOUT US", status: true },
          { path: "/contact_us", title: "CONTACT US", status: false },
        ])
      );
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
      <div className="pt-14">This is the About Us Page</div>
    </>
  );
}
export default About;
