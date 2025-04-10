import "./css/Explore.css";
import { FaPlusCircle, FaMapMarker, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

import ActivityCard from "../components/ActivityCard";
import Activites from "../components/Activities";

function Explore() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [prevSrc, setPrevSrc] = useState("");

  const uploadImage = (event) => {
    setPrevSrc(URL.createObjectURL(event.target.files[0]));
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main id="explore-page">
      <section class="search-container">
        <input type="text" class="search-input" placeholder="Search" />
        <input type="text" class="zipcode-input" placeholder="29201" />
        <FaMapMarker color="#344e41" />
      </section>

      <section class="filters">
        <button>Distance</button>
        <button>Rating (stars)</button>
        <button>Difficulty</button>
        <button>Activity Type</button>
        <button onClick={openModal}>
          {" "}
          <FaPlusCircle /> Add Activity{" "}
        </button>
      </section>

      <section className="explore">
        <Activites></Activites>
      </section>

      {isModalOpen && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <button className="close" onClick={closeModal}>
              <FaArrowLeft />
            </button>
            <h2>Add Activity</h2>
            <hr />
            <div className="activity-field">
              <h3>Activity Name:</h3>
              <input type="text" className="user-input" />
            </div>
            <div className="activity-field">
              <h3>Description:</h3>
              <input type="text" className="user-input" />
            </div>
            <div className="activity-field">
              <h3>Location:</h3>
              <input type="text" className="user-input" />
            </div>
            <div className="activity-field">
              <h3>Image Preview:</h3>
              {prevSrc != "" ? <img src={prevSrc} alt="" /> : ""};
              <h3>Images:</h3>
              <input type="file" id="photo-browse" onChange={uploadImage} />
            </div>
            <div id="submit-field">
              <button id="submit-button">Submit</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Explore;
