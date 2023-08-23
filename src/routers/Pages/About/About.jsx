import React, { useEffect } from "react";
// Library
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// Assest
import profile from "../../../assets/profile1.jpg";
import programmerIMG from "../../../assets/programming.png";
import "./About.scss";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Animasi pergeseran horizontal
    const sections = gsap.utils.toArray(".sections");
    const mask = document.querySelector(".scroll-bar g path");
    const anims = gsap.utils.toArray(".anim");

    let scrollTween = gsap.to(sections, {
      x: -100 * (sections.length - 1) + "vw",
      scrollTrigger: {
        trigger: ".about",
        scrub: 1,
        // markers: true,
        start: "top top",
        end: "bottom bottom",
      },
    });

    gsap.to(mask, {
      xPercent: 100,
      scrollTrigger: {
        trigger: ".about",
        scrub: 1,
        start: "top top",
        // markers: true,
      },
    });

    // sections.forEach((section) => {
    //   let text = section.querySelectorAll(".anim");
    // });

    anims.forEach((anim) => {
      gsap.from(anim, {
        y: -20,
      });
      // console.log(anim);
      gsap.to(anim, {
        opacity: "1",
        duration: 0.5,
        y: 0,
        scrollTrigger: {
          trigger: anim,
          start: "top center",
          end: "center+=5% center",
          // scrub: 1,
          toggleActions: "play reverse play reverse",
          containerAnimation: scrollTween,
          // markers: true,
        },
      });
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="about-wrap">
        {/* SCROLL BAR */}
        <svg
          className="scroll-bar"
          xmlns="http://www.w3.org/2000/svg"
          width="306"
          height="6"
          fill="none"
          viewBox="0 0 306 6"
        >
          <mask
            id="mask0_2_22"
            style={{ maskType: "alpha" }}
            width="306"
            height="6"
            x="0"
            y="0"
            maskUnits="userSpaceOnUse"
          >
            <path fill="#D9D9D9" d="M3 2h300v2H3V2z"></path>
            <path
              fill="#D9D9D9"
              d="M150 3a3 3 0 11-6 0 3 3 0 016 0zM306 3a3 3 0 11-6 0 3 3 0 016 0zM6 3a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </mask>
          <path fill="#D9D9D9" d="M3 2h300v2H3V2z"></path>
          <path
            fill="#D9D9D9"
            d="M150 3a3 3 0 11-6 0 3 3 0 016 0zM306 3a3 3 0 11-6 0 3 3 0 016 0zM6 3a3 3 0 11-6 0 3 3 0 016 0z"
          ></path>
          <g mask="url(#mask0_2_22)">
            <path fill="#0d6efd" d="M-32-40h352v86H-32v-86z"></path>
          </g>
        </svg>

        {/* MAIN */}
        <section className="sections">
          <div className="sections-wrapper">
            <div className="sections-text" data-aos="fade">
              <h2 data-aos="fade-down" data-aos-easing="ease-in-out" data-aos-duration="800">
                #ABOUT<span>ME</span>
              </h2>
              <br />
              <p data-aos="fade-right" data-aos-duration="1300" data-aos-easing="ease-in-out">
                Welcome to "About" page! I'm so happy you're here. <br /> My name is eRv4n, and I'm a front
                end developer. I live in Indonesia, my hobby is coding and design. <br /> This website is a
                space where I share my life journey, inspiration and achievements.
                スクロールして詳細を表示します
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1300"
              data-aos-easing="ease-in-out"
              className="profile"
            >
              {/* https://id.pinterest.com/pin/742601426072147711/ */}
              <img src={profile} alt="profile" />
            </div>
          </div>
        </section>
        <section className="sections anim">
          <div className="sections-wrapper">
            <section className="img">
              <img src={programmerIMG} alt="programmer" />
            </section>
            <div className="sections-text">
              <h2>Languages & Tools : </h2>
              <div className="iconList">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                  alt="icon"
                />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" alt="icon" />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  alt="icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                  alt="icon"
                />
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                  alt="icon"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="sections anim">
          <div className="sections-wrapper">
            <div className="sections-text">
              <h2>about1</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab aliquam id quod, illo ut iste
                natus impedit facere magnam fugit eum voluptatem hic ducimus illum dicta atque sint sit saepe?
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
