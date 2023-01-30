import "./App.css";
import Image from "./components/Image";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interest";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="content">
        <div className="card">
          <Image />
          <Info />
          <About />
          <Interest />
          <Footer />
        </div>
      </div>
    </>
  );
}
