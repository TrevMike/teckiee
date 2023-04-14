import "@/styles/globals.css";
import Layout from "@/components/Layout";
import store from "@/redux/configureStore";
import { createWrapper } from "next-redux-wrapper";

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
const wrapper = createWrapper(store);
export default wrapper.withRedux(App);
