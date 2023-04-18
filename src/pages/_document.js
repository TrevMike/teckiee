import { Html, Head, Main, NextScript } from "next/document";
// import test from "../tailwind/output.css";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="stylesheet" href="@/tailwind/output.css" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
