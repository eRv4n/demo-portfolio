import "./About.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      {/* main content */}
      <main className="about">
        <h1>About</h1>
      </main>
    </>
  );
};

export default About;
