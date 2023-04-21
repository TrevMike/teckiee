import WebServices from "@/components/ourServices/WebServices";
import Head from "next/head";

function OurServices() {
  return (
    <>
      <Head>
        <title>Teckiee | Our Services</title>
      </Head>
      <div className="pt-14">
        <WebServices />
      </div>
    </>
  );
}
export default OurServices;
