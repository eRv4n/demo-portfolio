import "./Home.scss";
// Library
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const home = document.querySelector("#home");
    gsap.to(home, {
      scrollTrigger: {
        trigger: home,
        start: "bottom bottom",
        snap: true,
      },
    });

    const homeContent = document.querySelector(".home-wrap");
    gsap.to(homeContent, {
      y: -200,
      scrollTrigger: {
        trigger: home,
        // markers: true,
        scrub: 3,
        start: "bottom bottom",
      },
    });
  }, []);

  return (
    <>
      <main className="home" id="home">
        <div className="home-wrap">
          <div>
            <h1>
              <span>Hi</span>, I'm eRv<span>4n</span>
            </h1>
            <p className="light-gray">
              I'm a
              <span>
                <Typewriter
                  words={[" Front-end", " Back-end"]}
                  loop={true}
                  cursor={true}
                  cursorStyle="_"
                  cursorColor="#0d6efd"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
              <span className="primary">{"Developer"}</span>
            </p>
            <a href="#about" className="btn btn-outline-primary">
              About me
            </a>
          </div>
          <div className="img" />
        </div>
        <div className="bg-home">
          <div></div>
        </div>
      </main>
    </>
  );
};

export default Home;
