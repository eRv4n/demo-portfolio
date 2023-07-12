import "./Project.scss";
import "../../css/_utility.scss";
import Navbar from "../../components/Navbar/Navbar";

const Project = () => {
  return (
    <>
      <Navbar />

      {/* main content */}
      <main className="project">
        <div className="project-wrap container">
          <h1>Project</h1>
          <div className="item">
            <div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Project;
