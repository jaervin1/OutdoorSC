import "./css/ActivityCard.css";

function ActivityCard(props) {
    return (
        <div class="result content">
            <div class="result-info">
                <h3>{props.name}</h3>
                <p>{props.rating}</p>
                <p>
                    {props.description}
                </p>
            </div>
            <div class="result-image">
                <img src={process.env.PUBLIC_URL + "/images/activity-images/" + props.images[0]} />
            </div>
        </div>
    );
};

export default ActivityCard;