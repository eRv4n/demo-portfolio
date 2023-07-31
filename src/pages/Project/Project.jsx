import "./Project.scss";
// import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";

const Project = () => {
  // const sementara = [
  //   {
  //     src: "https://github.com/eRv4n/basic-calculator/raw/main/img/Screenshot%202023-07-12%20205141.png",
  //     to: "https://erv4n.github.io/basic-calculator/",
  //     name: "calculator",
  //   },
  // ];

  return (
    <>
      {/* <Navbar /> */}

      {/* main content */}
      <div className="project" id="project">
        <div className="project-wrap container">
          <h1 data-aos="fade-right" data-aos-duration="1000">
            #Project
          </h1>
          <div className="wrap-item">
            <Card
              src="https://github.com/eRv4n/basic-calculator/raw/main/img/Screenshot%202023-07-12%20205141.png"
              to="https://erv4n.github.io/basic-calculator/"
              name="Calculator"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
