import React, { useState } from "react";

const AddActivity = (props) => {
  const [result, setResult] = useState("");
  const [prevSrc, setPrevSrc] = useState("");

  const uploadImage = (event) => {
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
  };

  const addToServer = async (event) => {
    event.preventDefault();
    setResult("Sending Data");

    const formData = new FormData(event.target);

    const response = await fetch(
      "https://outdoorsc-backend.onrender.com/api/activities",
      {
        method: "POST",
        body: formData,
      }
    );
    if (response.status === 200) {
      setResult("Activity added successfully...");
      const newActivity = await response.json();
      props.updateActivities(newActivity);
      event.target.reset();
      props.closeAddModal();
      setPrevSrc("");
    } else {
      setResult("Error adding activity. Please try again");
    }
  };

  return (
    <form id="add-activity" clssName="activity-form" onSubmit={addToServer}>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={props.closeAddModal}>
            &times;
          </span>
          <h2>Add Activity</h2>
          <hr />
          <div className="activity-field">
            <h3>Activity Name:</h3>
            <input type="text" name="name" className="user-input" required />
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
              {prevSrc && <img id="img-preview" src={prevSrc} alt="Preview" />}
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
  );
};

export default AddActivity;
