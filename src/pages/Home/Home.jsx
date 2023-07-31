import "./Home.scss";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  // const navigate = useNavigate();

  return (
    <>
      <main className="home" id="home">
        <div className="home-wrap openAnimation">
          <div>
            <h1>
              <span>Hi</span>, I'm eRv<span>4n</span>
            </h1>
            <p>Student | FrontEnd </p>
            {/* <button className="btn btn-outline-primary" onClick={() => navigate(`#about`)}>
              About me
            </button> */}
            <a href="#about" className="btn btn-outline-primary">
              About me
            </a>
          </div>
          <div className="img" />
        </div>
      </main>
    </>
  );
};

export default Home;
