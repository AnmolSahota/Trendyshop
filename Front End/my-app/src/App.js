import logo from "./logo.svg";
import "./App.css";
import MainRoutes from "./Components/MainRoutes";
import Navbar2 from "./Components/Navbar/Navbar2";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import BackToTop from "./Components/BackToTop/BackToTop";

function App() {
  return (
    <div>
      {/* <Navbar/>
      <Navbar2/> */}
      <MainRoutes />
      {/* <Footer/>
      <BackToTop/> */}
    </div>
  );
}

export default App;
