import "./css/Explore.css";
import { FaPlusCircle, FaMapMarker } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

import Activites from "../components/Activities";

function Explore() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");
  const [activities, setActivities] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const uploadImage = (event) => {
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        "https://outdoorsc-backend.onrender.com/api/activities"
      );
      setActivities(response.data);
    })();
  }, []);

  const updateActivities = (newActivity) => {
    setActivities((prev) => [...prev, newActivity]);
  };

  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending Data");

    const formData = new FormData(event.target);

    const response = await fetch("https://outdoorsc-backend.onrender.com/api/activities", {
      method: "POST",
      body: formData,
    });

    if (response.status === 200) {
      setResult("Activity added successfully...");
      const newActivity = await response.json();
      updateActivities(newActivity);
      event.target.reset();
      closeModal();
      setPrevSrc("");
    } else {
      setResult("Error adding activity. Please try again");
    }
  };

  return (
    <main id="explore-page">
      <section className="search-container">
        <input type="text" className="search-input" placeholder="Search" />
        <input type="text" className="zipcode-input" placeholder="29201" />
        <FaMapMarker color="#344e41" />
      </section>

      <section className="filters">
        <button>Distance</button>
        <button>Rating (stars)</button>
        <button>Difficulty</button>
        <button>Activity Type</button>
        <button onClick={openModal}>
          <FaPlusCircle /> Add Activity
        </button>
      </section>

      <section className="explore">
        <Activites activities={activities} />
      </section>

      {isModalOpen && (
        <form id="add-activity" onSubmit={addToServer}>
          <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2>Add Activity</h2>
              <hr />
              <div className="activity-field">
                <h3>Activity Name:</h3>
                <input
                  type="text"
                  name="name"
                  className="user-input"
                  required
                />
              </div>
              <div className="activity-field">
                <h3>Description:</h3>
                <textarea
                  id="description-input"
                  name="description"
                  rows="3"
                  required
                ></textarea>
              </div>
              <div className="activity-field">
                <h3>Location:</h3>
                <input
                  type="text"
                  name="location"
                  className="user-input"
                  required
                />
              </div>
              <div className="activity-field">
                <h3>Length(miles):</h3>
                <input
                  type="number"
                  name="length"
                  className="user-input"
                  required
                />
              </div>
              <div className="activity-field">
                <h3>Difficulty:</h3>
                <select name="difficulty" id="difficulty-select">
                  <option value="Easy">Easy</option>
                  <option value="Moderate">Moderate</option>
                  <option value="Hard">Hard</option>
                </select>
              </div>
              <div className="activity-field">
                <h3>Activity Type:</h3>
                <select name="activityType" id="activity-type-select">
                  <option value="Hike">Hike</option>
                  <option value="Bike">Bike</option>
                  <option value="Kayak">Kayak</option>
                  <option value="Walk">Walk</option>
                  <option value="Run">Run</option>
                </select>
              </div>
              <div className="activity-field">
                <h3>Route Type:</h3>
                <select name="routeType" id="route-type-select">
                  <option value="Loop">Loop</option>
                  <option value="Out-and-back">Out and Back</option>
                  <option value="Point-to-point">Point to Point</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="activity-field column">
                <section id="photo-preview">
                  {prevSrc && (
                    <img id="img-preview" src={prevSrc} alt="Preview" />
                  )}
                </section>
                <section>
                  <h3>Images:</h3>
                  <input
                    type="file"
                    id="photo-browse"
                    name="img"
                    accept="image/*"
                    onChange={uploadImage}
                  />
                </section>
              </div>
              <div id="submit-field">
                <button id="submit-button" type="submit">
                  Submit
                </button>
                <h4>{result}</h4>
              </div>
            </div>
          </div>
        </form>
      )}
    </main>
  );
}

export default Explore;
