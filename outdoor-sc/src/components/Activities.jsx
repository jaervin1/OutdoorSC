import { useState, useEffect } from "react";
import "./css/Activities.css";
import { FaPlusCircle } from "react-icons/fa";
import ActivityCard from "./ActivityCard";
import AddActivity from "./AddActivity"
import axios from "axios";

const Activites = () => {
  const [activities, setActivities] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://outdoorsc-backend.onrender.com/api/activities"
      );
      setActivities(response.data);
    })();
  }, []);

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  const updateActivities = (newActivity) => {
    setActivities((prev) => [...prev, newActivity]);
  };

  return (
    <>
      <section className="filters">
        <button>Distance</button>
        <button>Rating (stars)</button>
        <button>Difficulty</button>
        <button>Activity Type</button>
        <button onClick={openAddModal}>
          <FaPlusCircle /> Add Activity
        </button>
      </section>
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
      {showAddModal?(
        <AddActivity
        updateActivities = {updateActivities}
        closeAddModal = {closeAddModal}
        />
      ): ("")}

      
    </>
  );
};

export default Activites;
