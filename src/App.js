import { useEffect } from "react";
import Pages from "./routers/Pages/Pages";
import "./_utility.scss";
// Library
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pages />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
