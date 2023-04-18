import "@/tailwind/output.css";
import Layout from "@/components/Layout";
import { Provider } from "react-redux";
import store from "@/redux/configureStore";

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default App;
