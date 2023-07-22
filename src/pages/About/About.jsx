import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-wrap">
          <div>
            <div className="page" data-aos="fade" data-aos-duration="1000">
              {/* <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out">
                #ABOUT
              </h1> */}
              <h1>#ABOUT</h1>
              <span>SCROLL</span>
              <span class="material-symbols-outlined">keyboard_arrow_down</span>
            </div>
            <div className="page">
              <h1 data-aos="fade-right" data-aos-duration="1000">
                Hello! my name eRv4n
              </h1>
            </div>
            <div className="page"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
