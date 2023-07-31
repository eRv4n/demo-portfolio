import { useEffect } from "react";
// library
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// css
import "./css/main.css";
import "./css/_utility.scss";
// components
import NotFound from "./pages/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import FirstPage from "./FirstPage";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/"} element={<FirstPage />} />
          {/* <Route path={"/"} element={<Home />} /> */}
          {/* <Route path={"/about"} element={<About />} />
          <Route path={"/project"} element={<Project />} />
          <Route path={"/contact"} element={<Contact />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
