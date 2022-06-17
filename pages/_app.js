import "../styles/globals.css";
import NavbarComponent from "../components/NavbarComponent/NavbarComponent";
function MyApp({ Component, pageProps }) {
  return (
    <div className="BackgroundHelper">
      <NavbarComponent />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
