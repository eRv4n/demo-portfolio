import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./HorizontalScroll.css"; // File CSS untuk styling

const HorizontalScroll = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Animasi pergeseran horizontal
    gsap.to(".scroll-container", {
      x: () => -(document.querySelector(".section").offsetWidth - window.innerWidth),
      scrollTrigger: {
        trigger: ".horizontal-scroll",
        start: "top top", // Mulai animasi ketika bagian atas .horizontal-scroll memasuki viewport
        end: () => "+=" + document.querySelector(".section").offsetWidth, // Akhiri animasi ketika konten .scroll-container selesai ditampilkan
        scrub: 0.5, // Efek "scrubbing" untuk animasi yang lebih halus saat di-scroll
        pin: true, // "Pin" elemen .horizontal-scroll di viewport ketika scroll animasi berlangsung
        anticipatePin: 1, // Mengaktifkan antisipasi pin agar animasi lebih halus
        markers: true, // Hanya untuk debugging - menampilkan marker ScrollTrigger
      },
    });
  }, []);

  return (
    <div className="horizontal-scroll">
      <div className="scroll-container">
        <div className="section">
          <h1>Section 1</h1>
        </div>
        <div className="section">
          <h1>Section 2</h1>
        </div>
        <div className="section">
          <h1>Section 3</h1>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScroll;
