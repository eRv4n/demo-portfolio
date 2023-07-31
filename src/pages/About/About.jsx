import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.scss";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Animasi pergeseran horizontal
    const sections = gsap.utils.toArray(".sections");

    gsap.to(sections, {
      x: -100 * (sections.length - 1) + "vw",
      scrollTrigger: {
        trigger: ".about",
        scrub: 3,
        // markers: true,
        start: "top top",
        end: "bottom bottom",
      },
    });
  }, []);

  return (
    <div className="about" id="about">
      <div className="about-wrap">
        <h1 className="about-label">#ABOUT</h1>
        <section className="sections">
          <div className="sections-wrapper">
            <h2>about1</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab aliquam id quod, illo ut iste natus impedit facere magnam fugit eum
              voluptatem hic ducimus illum dicta atque sint sit saepe?
            </p>
          </div>
        </section>
        <section className="sections">
          <div className="sections-wrapper">
            <h2>about1</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab aliquam id quod, illo ut iste natus impedit facere magnam fugit eum
              voluptatem hic ducimus illum dicta atque sint sit saepe?
            </p>
          </div>
        </section>
        <section className="sections">
          <div className="sections-wrapper">
            <h2>about1</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab aliquam id quod, illo ut iste natus impedit facere magnam fugit eum
              voluptatem hic ducimus illum dicta atque sint sit saepe?
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
