import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import MainStore from "../sdk/stores";
import { MainContextProvider } from "../contexts/MainContext";

const store = new MainStore();

function MyApp({ Component, pageProps }) {
  return (
    <MainContextProvider store={store}>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MainContextProvider>
  );
}

export default MyApp;
