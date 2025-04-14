import { useState, useEffect } from "react";
import "./css/Activities.css";
import ActivityCard from "./ActivityCard";
import axios from "axios";

const Activites = () => {

  const [activities, setActivities] = useState([]);

    useEffect(() => {
    (async () => {
      const response = await axios.get("https://outdoorsc-backend.onrender.com/api/activities");
      setActivities(response.data);
    })();
  }, []);

  return (
    <>
      {activities.map((activity) => (
        <ActivityCard 
          key={activity._id}
          _id={activity._id}
          name={activity.name}
          location={activity.location}
          description={activity.description}
          length={activity.length}
          routeType={activity.routeType}
          difficulty={activity.difficulty}
          rating={activity.rating}
          activityType={activity.activityType}
          review={activity.reviews}
          pictures={activity.pictures}
        />
      ))}
    </>
  );
}

export default Activites;
