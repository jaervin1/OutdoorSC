import "./css/ActivityCard.css";

function ActivityCard(props) {
    return (
        <div className="result content" onClick={onClick}>
            <div className="result-info">
                <h3>{props.name}</h3>
                <div className="rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span
                            key={i}
                            className={`fa fa-star ${i < roundedRating ? "checked" : "unchecked"}`}
                        />
                    ))}
                </div>
                <p>{props.description}</p>
            </div>
            <div className="result-image">
                <img
                    src={
                        pictures && pictures.length > 0
                            ? process.env.PUBLIC_URL + "/" + pictures[0]
                            : process.env.PUBLIC_URL + "/default.jpg"
                    }
                />
            </div>
        </div>
    );
};

export default ActivityCard;