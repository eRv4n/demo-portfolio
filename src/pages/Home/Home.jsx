import "./Home.css";
import "../../css/_utility.scss";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      {/* Main content */}
      <main className="home">
        <div className="home-wrap">
          <div>
            <h1>
              <span>Hi</span>, I'm eRv<span>4n</span>
              {/* <span>4n</span> */}
            </h1>
            <p>BackEnd | FrontEnd | Devops</p>
            <button className="btn btn-outline-primary" onClick={() => navigate(`/about`)}>
              About me
            </button>
          </div>
          <div className="img" />
        </div>
      </main>
    </>
  );
};

export default Home;
