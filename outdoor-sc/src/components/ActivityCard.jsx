import { FaStar, FaEdit, FaTrash } from "react-icons/fa";
import "./css/ActivityCard.css";
import EditActivities from "./EditActivities";
import DeleteActivity from "./DeleteActivity"; // optional if you have this

import { useState } from "react";

function ActivityCard(props) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [activity, setActivity] = useState(props);
  const [showActivity, setShowActivity] = useState(true);

  const openEditModal = () => setShowEditModal(true);
  const closeEditModal = () => setShowEditModal(false);

  const openDeleteModal = () => setShowDeleteModal(true);
  const closeDeleteModal = () => setShowDeleteModal(false);

  const updateActivity = (updated) => setActivity(updated);

  const setHideActivity = (shouldHide) => {
    if (shouldHide) setShowActivity(false);
  };

  if(!showActivity) return <></>

  return (
    <>
      {showActivity && (
        <div className="result content">
          <div className="result-image">
            <img
              className="activity-image"
              src={
                process.env.PUBLIC_URL +
                "/images/activity-images/" +
                activity.pictures[0]
              }
              alt={activity.name}
            />
          </div>

          <div className="result-info">
            <h2 className="activity-title">{activity.name}</h2>
            <div className="activity-meta">
              <span className="rating">
                <FaStar size={18} color="#344e41" /> {activity.rating}
              </span>
              <span>• {activity.difficulty}</span>
              <span>• {activity.length} miles</span>
            </div>
            <p>{activity.description}</p>

            <div className="activity-buttons">
              <button onClick={openEditModal}>
                <FaEdit />
              </button>
              {showEditModal ? (
                <EditActivities
                  closeEditModal={closeEditModal}
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
                  updateActivity = {updateActivity}
                />
              ) : (
                ""
              )}
              <button onClick={openDeleteModal}>
                <FaTrash />
              </button>
              {showDeleteModal ? (
                <DeleteActivity
                closeDeleteModal = {closeDeleteModal}
                name = {activity.name}
                _id = {activity._id}
                setHideActivity = {setHideActivity}
                />
              ):("")}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ActivityCard;
