import "./About.scss";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-wrap" id="about">
          {/* <Navbar /> */}
          <div className="item container openAnimation">
            <h1 className="titleHeader" href="#about-more">
              #ABOUT
            </h1>
            <p>
              <span className="material-symbols-outlined arrowAnimation">play_arrowplay_arrowplay_arrowplay_arrowplay_arrow</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
