import { FaStar } from "react-icons/fa";
import "./css/ActivityCard.css";

function ActivityCard(props) {
  return (
    <div className="result content">
      <div className="result-image">
        <img
          className="activity-image"
          src=
            {process.env.PUBLIC_URL + "/images/activity-images/" +
            props.pictures[0]}
        />
      </div>
      <div class="result-info">
        <h2 className="activity-title">{props.name}</h2>
        <div className="activity-meta">
          <span className="rating">
            <FaStar size={18} color="#344e41" /> {props.rating}
          </span>
          <span>• {props.difficulty}</span>
          <span>• {props.length} miles</span>
        </div>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ActivityCard;
