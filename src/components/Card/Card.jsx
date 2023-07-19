import { Link } from "react-router-dom";
import "./Card.scss";

const Card = (props) => {
  return (
    <Link className="card" to={props.to}>
      <img src={props.src} alt="" />
      <h2>{props.name}</h2>
    </Link>
    // <div className="card">
    // </div>
  );
};

export default Card;
