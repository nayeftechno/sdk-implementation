import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ToDoStore from "../sdk/stores/ToDoStore";
import { DataContextProvider } from "../contexts/DataContext";

const store = new ToDoStore();

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider store={store}>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataContextProvider>
  );
}

export default MyApp;
