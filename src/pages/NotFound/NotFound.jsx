import "../../css/_utility.scss";
import "./NotFound.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="not-found">
        <div className="container">
          <div className="errorImg"></div>
          <div>
            <h1>Oops!</h1>
            <div>
              <h3 className="not-found-info">SORRY, THE PAGE NOT FOUND</h3>
              <button className="btn btn-primary" onClick={() => navigate(`/`)}>
                home
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
