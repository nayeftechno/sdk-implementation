import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import EmployeeStore from "../sdk/stores/EmployeeStore";
import { EmployeeContextProvider } from "../contexts/EmployeeContext";

const store = new EmployeeStore();

function MyApp({ Component, pageProps }) {
  return (
    <EmployeeContextProvider store={store}>
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </EmployeeContextProvider>
  );
}

export default MyApp;
