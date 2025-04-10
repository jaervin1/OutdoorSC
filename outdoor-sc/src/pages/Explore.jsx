import "./css/Explore.css";
import { FaPlusCircle, FaMapMarker } from "react-icons/fa";
import { useState } from "react";

import Activites from "../components/Activities";



function Explore() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

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
                <button onClick={openModal}> <FaPlusCircle /> Add Activity </button>
            </section>

            <section className="explore">
                <Activites></Activites>
            </section>

            {isModalOpen && (
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
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
                            <h3>Images:</h3>
                            <input type="file" id="photo-browse" />
                        </div>
                        <div id="submit-field">
                            <button id="submit-button">Submit</button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default Explore;